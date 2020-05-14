let request = require("request");
let root_url = "http://localhost:3000/"

describe('homepage', () => {
  describe('get', () => {
    it ('returns status 200', () => {
      request.get(root_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      })
    })
    it("returns Algorithm Timer", (done) => {
      request.get(root_url, (error, response, body) => {
        expect(body).toBe("Algorithm Timer");
        done();
      })
    })
  })
})
