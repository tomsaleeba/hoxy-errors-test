import socket
import struct
import sys
import time

host = 'localhost'
port = 8080

# thanks https://stackoverflow.com/a/6440364/1410035
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
s.connect((host, port))
l_onoff = 1
l_linger = 0
s.setsockopt(socket.SOL_SOCKET, socket.SO_LINGER, struct.pack('ii', l_onoff, l_linger))
# send data here
s.sendall(bytes('GET / HTTP/1.1\r\nHost: locahost:8080\r\nAccept: */*\r\n\r\n', 'UTF-8'))
print('add the firewall rule now')
time.sleep(10)
s.recv(4096)
s.close()

