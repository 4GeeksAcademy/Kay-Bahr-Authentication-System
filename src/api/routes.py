"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/token', methods=['POST'])
def handle_token():

    response_body = {
        "message": "This is the backend to generates a token only if it receives an email and password that matches in the database, and will return the token to the front-end if everything is ok."
    }

    return jsonify(response_body), 200

# Then, on every other endpoint in your database you will have to validate if the token exists in the request header and if it does you will have to validate it

@api.route('/signup', methods=['POST', 'GET'])
def handle_signup():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST', 'GET'])
def handle_login():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/private', methods=['POST', 'GET'])
def handle_private():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200