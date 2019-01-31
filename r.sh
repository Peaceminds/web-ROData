#!/bin/sh
killall -9 uwsgi
uwsgi --ini uwsgi.ini
echo "uwsgi is restart!"
