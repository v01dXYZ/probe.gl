// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export default [{
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Overview',
    markdown: require( '../../docs/README.md')
  }, {
    name: 'What\'s New',
    markdown: require('../../docs/whats-new.md')
  }, {
    name: 'Get started',
    children: [{
      name: 'Installation',
      markdown: require('../../docs/get-started/README.md')
    }, {
      name: 'Adding Probes',
      markdown: require('../../docs/get-started/adding-probes.md')
    }]
  }, {
    name: 'Articles',
    children: [{
      name: 'Console Logging',
      markdown: require('../../docs/articles/about-logging.md')
    }]
  }, {
    name: 'Logging API Reference',
    children: [{
      name: 'Probe',
      markdown: require('../../docs/api-reference/probe.md')
    // }, {
    //   name: 'ProbeGroup',
    //   markdown: probeGroup
    // '../../docs/api-reference/probe-group.md')
    }, {
      name: 'Error Handling',
      markdown: require('../../docs/api-reference/error-handling.md')
    }]
  }, {
    name: 'Experimental API',
    children: [{
      name: 'Logger',
      markdown: require('../../docs/api-reference/logger.md')
    }]
  }]
}];
