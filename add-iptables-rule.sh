#!/bin/bash
sudo iptables -A INPUT -i lo -p tcp --dport 8080 -j DROP
