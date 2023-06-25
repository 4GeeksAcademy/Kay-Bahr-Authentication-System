"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not is_valid_credentials(email, password):
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

def is_valid_credentials(email, password):
    user = User.query.filter_by(email=email).first()
    
    if user and user.password == password:
        return True
    
    return False

@api.route('/signup', methods=['POST'])
def handle_signup():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    is_active = True

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'msg': 'Email already exists'}), 400

    new_user = User(email=email, password=password, is_active=is_active)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'msg': 'User created successfully'}), 201

# Then, on every other endpoint in your database you will have to validate if the token exists in the request header and if it does you will have to validate it

@api.route('/login', methods=['POST'])
def handle_login():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def handle_private():
    email = get_jwt_identity()
    response_body = {
        "message": "Hello, " + email + "! This is your private page when logged in."
    }
    return jsonify(response_body), 200