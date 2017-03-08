# Solr Implementation

Before begin, I assume you downloaded proper Solr version from web page of [Solr ](http://lucene.apache.org/solr/). (For e.g: __solr-6.4.1.tgz__)

After that I assume you uncompress the compressed file < __solr-6.4.1.tgz__ > and from command line you changed your current working directory to uncompressed directory < __solr-6.4.1/__ >.

The last step of pre-configuration is ensure that JDK 8 install correctly and `java -version` command return properly.

If you have done above instructions you are ready for rest part. Let's begin:

### Working with an example: `techproduct`

* to start any example you can simply say `bin/solr start -e <example-collection-name>`:

> bin/solr start -e techproduct

!!! If you see some thing like this its creation was succesfull:
``` ...
	...
	...
	Started Solr server on port 8983 (pid=18152). Happy searching!
	...
	...
	...
	Solr techproducts example launched successfully. Direct your Web browser to http://localhost:8983/solr to visit the Solr Admin UI
```

* the web page address `http://localhost:8983/solr` is for Solr Admin UI. Visit [that page](http://localhost:8983/solr) from browser.

* Select a collection/core/cloud from left panel.

	- The first page (**Overview**) contains summary for the collection (number of docs indexed, number of docs deleted, Location Info about current working directory, which directory has indexed files,  etc.).
	- **Analysis Page** contains a UI for showing how content would be handled during indexing or during query processing and view the results separately or at the same time. 
	- **Document Page** contains a form for manual data post (indexing).
	- **Files Page** contains a file browser for the selected collection.
	- **Ping** is a tool (not a page) for the server response time measurement.
	- **Plugins/Stats Page** contains plugins and system statistics as name suggested.
	- **Replication Page** contains information about replica of an datasets, indexes etc.
	- **Schema Page** contains a UI for managing data schema, field type, field name etc.
	- **Query Page** containa a UI for sending query for the docs and getting result. It also have parametrization option for queries.

* After finished our work in Solr we should close it with this command:
> bin/solr stop -all


### Work with a brand-new collection:

#### The Steps:
1. Start Solr
2. Create a new Core/Collection/Cloud
3. Index own data (Post) to Solr
4. Edit Data Field Type (Schema)
5. Query, Query, Query and Fun!


If we want to create an new collection and index specific docs we can use this option (creating core). 
! You can reach the script with [this](https://gist.github.com/molcay/6cc49aaa0885a9e81940) which we will use during implementation.
* Before create a core we need to start the Solr server to do that in command line simply type: 
> bin/solr start

* to `create` new core/collection/cloud you can simply say `bin/solr create_core -c`**`<CORE-NAME>`**:
> bin/solr create_core -c haberler

* After the creation of core we can `edit` `server/solr/<CORE-NAME>/conf/managed-schema` file for the proper field type. If we do it after `POST` operation its more easy because it can handle fields automaticly, almost fine (edit location much lesser then add them manually).
```xml
<field name="title" type="text_tr" indexed="true"/>
<field name="category" type="string" indexed="true"/>
<field name="content" type="text_tr" indexed="true"/>
<field name="length" type="string" indexed="true"/>
```
* to `POST` a single file or bunch of files you can simply say `bin/post -c`**`<CORE-NAME> <PATH-FOR-IMPORT-FILE(s)>`**: 
> bin/post -c haberler ~/Desktop/result.json

* to `delete` the core you can simply say `bin/solr delete -c`**`<CORE-NAME>`**: 
> bin/solr delete -c news


#### Windows (OS) Hint

* The posting steps can be tricky. Because you need the specify `.jar` file for POST operation as well as the **`<CORE-NAME>`** and **`<PATH-FOR-IMPORT-FILE(s)>`**. to do that simply say `java -Dtype=application/json -Dc=`**`<CORE-NAME>`**` -jar `**`<POST-JAR-PATH> <PATH-FOR-IMPORT-FILE(s)>`**

> java -Dtype=application/json -Dc=haberler -jar ../example/exampledocs/post.jar ~/Desktop/result.json




## Example
**Python 2.x**
```python
# *-* coding: utf-8 *-*
import json
import urllib

__CORE_NAME__ = "haberler"

def get_result(search_term, category="*", page=0):
	search_term = search_term.replace(' ', "+")
	search_url = "http://localhost:8983/solr/{0}/select?q={1}&wt=json&indent=true".format(__CORE_NAME__, search_term)
	search_resp = urllib.urlopen(search_url)
	result = json.loads(search_resp.read())
	return result

result = get_result("ankara")

print(json.dumps(result['response']['numFound'], indent=4))
```
**Ruby**
```ruby
require 'net/http'
require 'json'


def get_result(search_term, corename="haberler")
	str_url = "http://localhost:8983/solr/#{corename}/select?q=#{search_term}&wt=json&indent=true"
	# puts str_url
	url = URI.parse(str_url)
	req = Net::HTTP::Get.new(url.to_s)
	res = Net::HTTP.start(url.host, url.port) {|http|
	  http.request(req)
	}
	return res.body
end

result = get_result "ankara"

puts JSON.parse(result)['response']['numFound']
```
