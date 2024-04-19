describe('httpbin test 1', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 2', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 3', () => {
  const request = {
      method: 'DELETE',
      url: 'https://httpbin.org/delete',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
          'Sec-Fetch-Mode': 'cors',
      },
    };
  it('response code should be 200', () => {
      cy.request(request).then(response => {
          assert.equal(200, response.status);
          assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
          assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
      });
  });
});

describe('httpbin test 4', () => {
    const request = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 5', () => {
  const request = {
      method: 'PATCH',
      url: 'https://httpbin.org/patch',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
          'Sec-Fetch-Mode': 'cors',
      },
    };
  it('response code should be 200', () => {
      cy.request(request).then(response => {
          assert.equal(200, response.status);
          assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
          assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
      });
  });
});

describe('httpbin tests 6 and 7', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
    it('test duration', () => {
      cy.request(request).then(response => {
        assert.isTrue(response.duration <= 500)
      });
    });
});

describe('httpbin test 8', () => {
    it('test random ids', () => {
      for(let i = 0; i < 10; i++) {
        const randomId = getRandomInt(10000000);
          const request = {
          url: 'https://httpbin.org/headers',
          id: randomId
        }
          cy.request(request).then(response => {
          assert.isTrue(response.status == 200)
        });
      };
    });
  });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

describe('httpbin test 9', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "origin": "5.173.248.160"
      },
      failOnStatusCode: false
    };
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal("5.173.248.160", response.body.args.origin);
      });
    });
  });

describe('httpbin test 10', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/cookies/set/cookie/cantuccini',
        headers: {
            'Cookie': 'cookie=cantuccini',
        },
        failOnStatusCode: false,
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("cookie=cantuccini", response.requestHeaders['Cookie']);
        });
    });
  });  

describe('httpbin test 11', () => {
    const request = {
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
    it('test single response header key', () => {
      cy.request(request).then(response => {
        assert.equal('5.173.248.160', response.body['origin']);
      });
    });
  });