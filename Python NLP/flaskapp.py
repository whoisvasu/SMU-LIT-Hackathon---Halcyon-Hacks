from flask import Flask, render_template, request
from wtforms import Form, TextAreaField, validators
#import pickle
#import sqlite3
#import os
import numpy as np
import joblib

loaded_model=joblib.load(r'/home/wujiankai/movieclassifier/pkl_objects/model.pkl')
#loaded_model=joblib.load(r'pkl_objects\model.pkl')
#loaded_stop=joblib.load('./pkl_objects/stopwords.pkl')
loaded_vec=joblib.load(r'/home/wujiankai/movieclassifier/pkl_objects/tfidf.pkl')
categories = ["Civil claims","Contentious Commercial Corporate Disputes","Crime", "Family", "Incapacity and Inheritance", "Intellectual Property","Non Contentious Commercial Corporate Advisory", "Personal legal procedures", "Property and Housing", "Syariah law", "TMT Data Protection and Privacy"]


app = Flask(__name__)

def classify(clientinput):
    XX = loaded_vec.transform([clientinput])
    YY = loaded_model.predict(XX)[0]
    return YY

class ReviewForm(Form):
    moviereview = TextAreaField('',[validators.DataRequired(),validators.length(min=1)])

@app.route('/')
def index():
    form = ReviewForm(request.values)
    return render_template('reviewform.html', form=form)

@app.route('/results', methods=['POST'])
def results():
    form = ReviewForm(request.form)
    if form.validate():
        review = request.form['moviereview']
        YY = classify(review)
        if len(np.where(YY == 1)[0]) != 0:
            index = np.where(YY == 1)[0][0]
            print_out = categories[index]
        else:
            print_out = "Others"
        #print_out = YY[0]
        return render_template('results.html',content=review,prediction=print_out)
    return render_template('reviewform.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)