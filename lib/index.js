module.exports = {
  pkg: require('../package'),
  register: (server, options) => {
    function success (payload, code = 200) {
      return this.response({
        statusCode: code,
        message: 'ok',
        error: null,
        ...payload
      }).code(code)
    }
    server.decorate('toolkit', 'success', success)
  }
}
