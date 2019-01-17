# Kubernetes Demo
> Source code is available [here](https://github.com/molcay/KubernetesPresentationDemo).

## Table of Contents
* [Kubectl Commands](#kubectl-commands)
  - [TLDR;](#tldr)
  - [Detailed List](#detailed-list)
* [Configuration File Samples](#configuration-file-samples)

## Kubectl Commands
List of some basic command of docker cli.

### TLDR;
```bash
$ kubectl cluster-info

$ kubectl get pods

$ kubectl get deployments

$ kubectl get svc

$ kubectl exec -it k8s-demo-vote-pod bash

$ kubectl scale --replicas=3 deployment/k8s-demo-worker # scale a deployment/pods/rc or from a file with `-f`
# kubectl scale --replicas=3 -f foo.yaml

$ kubectl apply -f <filepath> # -f folderpath -R for recursive
```

### Detailed List

!!!TODO

---

## Configuration File Samples

* Config file samples available:
  - for `Pod`: 
    + single pod config: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s-gitea/gitea-pod.yaml)
    + 2 different pod config: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s-simple/pods.yaml)
  - for `Service`: 
    + `NodePort`: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s-simple/services.yaml)
    + `LoadBalancer`: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s-gitea/gitea-service.yaml)
  - for `Deployment`: 
    + Port Mapping: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s-gitea/gitea-deployment.yaml)
    + Environment Variable with Secret: [config.yaml](https://github.com/molcay/KubernetesPresentationDemo/blob/master/k8s/worker/deployment.yaml)
