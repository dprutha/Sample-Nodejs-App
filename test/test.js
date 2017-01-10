/**
 * Created by Prutha on 1/10/2017.
 */

var should = require('should');
var assert = require('assert');
var supertest = require('supertest');
//var mongoose = require('mongoose');
//var util=require('./util.js');
//var data=require('./data.js');

var server = supertest.agent("http://localhost:3000");


describe('Get category name from taxonomy', function() {
    beforeEach(function(){

        // simulate async call w/ setTimeout
        setTimeout(function(){
            foo = true;
        }, 10000);

    });

    it('should respond to 200 if success', function (done) {
        server
            .get('/walmart/item')
            .expect(200)
            // end handles the response
           .then(function (data) {
               assert(data!=undefined,"Should get valid data");
                setTimeout(done,10000);
           });
    });
});