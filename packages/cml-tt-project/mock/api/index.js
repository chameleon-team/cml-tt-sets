
module.exports = [{
  domainKey: 'domain1',
  request: [
    {
      method: ['get', 'post'],
      path: '/api/getMessage',
      controller: function (req, res, next) {
        res.json({
          total: 0,
          message: [{
            name: 'Hello chameleon! domain1'
          }]
        });
      }
    }
  ] 
},
{
  domainKey: 'domain2',
  request: [
    {
      method: ['get', 'post'],
      path: '/api/getMessage',
      controller: function (req, res, next) {
        res.json({
          total: 0,
          message: [{
            name: 'domain2!'
          }]
        });
      }
    }
  ] 
},{
  domainKey: 'domain3',
  request: [
    {
      method: ['get', 'post'],
      path: '/api/getMessage',
      controller: function (req, res, next) {
        res.json({
          total: 0,
          message: [{
            name: 'domain2!'
          }]
        });
      }
    }
  ] 
}]
