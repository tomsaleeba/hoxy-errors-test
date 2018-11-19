#!/bin/bash
sudo iptables -D INPUT -i lo -p tcp --dport 8080 -j DROP
