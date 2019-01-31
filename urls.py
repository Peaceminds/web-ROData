#!/usr/bin/env python
# -*- coding: utf-8 -*-

__author__ = 'Peaceminds'

import sys, wtforms
reload(sys)
sys.setdefaultencoding('utf8')
from flask import *

app=Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def calculator_page():
    return render_template('index.html')
