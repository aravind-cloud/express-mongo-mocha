import { expect } from "chai";
import request from "supertest";
import server from "../src/server";

describe("# Get all Products", function() {
  it("should get all products", function(done) {
    request(server)
      .get("/api/products/")
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  it("should get product for the id 5d432ed86498bae8c0d2d953", function(done) {
    request(server)
      .get("/api/products/5d432ed86498bae8c0d2d953")
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("should get 404 for the id 5d432ed86498bae8c0d2d959", function(done) {
    request(server)
      .get("/api/products/5d432ed86498bae8c0d2d959")
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it("should get 500 for the invalud Objectid 5d4b59c4565b5b4726ed63bh", function(done) {
    request(server)
      .get("/api/products/5d4b59c4565b5b4726ed63bh")
      .end(function(err, res) {
        expect(res.statusCode).to.equal(500);
        done();
      });
  });
});

describe("Create a Product", function() {
  it("Should get 201 upon successful creation of product", function(done) {
    request(server)
      .post("/api/products/")
      .send({
        name: "Pixel - Beta",
        quantity: 45,
        available: true,

        metadata: {
          imported: false,
          description: "Google Pixel"
        }
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("Should get 500 when the payload not matching with product schema defined by mongoose", function(done) {
    request(server)
      .post("/api/products/")
      .send({
        age: 1
      })
      .set("Accept", "application/json")
      .expect(500)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
