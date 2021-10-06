##Diagnosis of the problem:
```
# service kubelet restart
# journalctl -xe
# tail -f /var/log/syslog
```

##The problem: 

`Part of the existing bootstrap client certificate is expired ... failed to run Kubelet: unable to load bootstrap kubeconfig: stat /etc/kubernetes/bootstrap-kubelet.conf: no such file or directory`

##Solution:
```
# kubeadm alpha certs check-expiration
# kubeadm alpha certs renew all
# kubeadm alpha kubeconfig user --org system:nodes --client-name system:node:$(hostname) > kubelet.conf
# cp kubelet.conf /etc/kubernetes/bootstrap-kubelet.conf
```

Now `kubectl get nodes` will throw an error
`You must be logged in to the server (Unauthorized)`
Using the generated .conf file fixes the issue and we have access to the cluster again
`kubectl --kubeconfig=kubelet.conf get nodes` will work correctly and the rest of the nodes will update the certificates accordingly.

