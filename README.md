Trying to trigger errors that we see in production, like:

```
(node:1) UnhandledPromiseRejectionWarning: Error: read ECONNRESET
  at TCP.onStreamRead (internal/stream_base_commons.js:111:27)
(node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 7990)
```
...and...
```
(node:1) UnhandledPromiseRejectionWarning: Error: connect ETIMEDOUT 160.153.153.164:80
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1113:14)
(node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 7988)
```

I'm not sure how to cause them so I can figure out where in the code they originate.

## Useful reading
some info about tcpdump and TCP in general: http://www.pcvr.nl/tcpip/tcp_conn.htm
info about SO_LINGER: http://developerweb.net/viewtopic.php?id=2982
blog about sockets: https://blog.stephencleary.com/2009/05/detection-of-half-open-dropped.html
Unix SO answer about using iptables to block the client from the server (to test the server): https://unix.stackexchange.com/a/136656/68885

## Intended workflow (although it doesn't work)

  1. install the deps: `yarn`
  1. start the server with `node hoxy.js`
  1. trigger a client connection: `python3 client.py`
  1. when the script tells you, run the `add-iptables-rule.sh` script to block the server
  1. when you're done, you remove the firewall rule with `remove-iptables-rule.sh`

