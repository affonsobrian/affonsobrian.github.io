(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [266],
  {
    8619: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 22));
    },
    7016: function (e, t, n) {
      'use strict';
      n.d(t, {
        W3: function () {
          return p;
        },
        bG: function () {
          return l;
        },
        bt: function () {
          return c;
        },
        k8: function () {
          return i;
        },
      });
      var r,
        s = n(6312),
        a = n(8466);
      function i() {
        return o.apply(this, arguments);
      }
      function o() {
        return (o = (0, s._)(function () {
          var e, t, n;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                (e = 'https://backend.azvd.net/positions/'), (r.label = 1);
              case 1:
                return r.trys.push([1, 4, , 5]), [4, fetch(e)];
              case 2:
                if (!(t = r.sent()).ok)
                  throw Error('Request failed with status '.concat(t.status));
                return [4, t.json()];
              case 3:
                return [2, r.sent()];
              case 4:
                throw (
                  ((n = r.sent()),
                  Error('Error in getPositions: '.concat(n.message)))
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function c(e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = (0, s._)(function (e) {
          var t, n, r;
          return (0, a.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                (t = 'https://backend.azvd.net/positions/' + e + '/'),
                  (s.label = 1);
              case 1:
                return s.trys.push([1, 4, , 5]), [4, fetch(t)];
              case 2:
                if (!(n = s.sent()).ok)
                  throw Error('Request failed with status '.concat(n.status));
                return [4, n.json()];
              case 3:
                return [2, s.sent()];
              case 4:
                throw (
                  ((r = s.sent()),
                  Error('Error in getPosition: '.concat(r.message)))
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function l(e, t, n, r) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, s._)(function (e, t, n, r) {
          var s, i, o, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                (s = { name: e, company: t, email: n, message: r }),
                  (i = 'https://backend.azvd.net/contacts/'),
                  (a.label = 1);
              case 1:
                return (
                  a.trys.push([1, 4, , 5]),
                  [
                    4,
                    fetch(i, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(s),
                    }),
                  ]
                );
              case 2:
                if (!(o = a.sent()).ok)
                  throw Error('Error sending message: '.concat(o.statusText));
                return [4, o.json()];
              case 3:
                return [2, a.sent()];
              case 4:
                throw (
                  (console.error(
                    'Error sending message:',
                    (c = a.sent()).message
                  ),
                  c)
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var p =
        ((r = (0, s._)(function (e, t, n, r, s, i) {
          var o, c, u;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  a.trys.push([0, 3, , 4]),
                  (o = new FormData()).append('name', e),
                  o.append('email', t),
                  o.append('linkedin', n),
                  o.append('salary_expectation', r),
                  o.append('resume_file', s),
                  o.append('position', i),
                  [
                    4,
                    fetch('https://backend.azvd.net/applications/', {
                      method: 'POST',
                      body: o,
                    }),
                  ]
                );
              case 1:
                if (!(c = a.sent()).ok)
                  throw Error('HTTP error! Status: '.concat(c.status));
                return [4, c.json()];
              case 2:
                return [2, a.sent()];
              case 3:
                throw (
                  (console.error('Error creating application:', (u = a.sent())),
                  u)
                );
              case 4:
                return [2];
            }
          });
        })),
        function (e, t, n, s, a, i) {
          return r.apply(this, arguments);
        });
    },
    22: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var r = n(6312),
        s = n(7986),
        a = n(6429),
        i = n(8344),
        o = n(8466),
        c = n(9268),
        u = n(6006),
        l = n(6622),
        h = n(5846),
        p = n.n(h),
        d = function (e) {
          var t = e.rows,
            n = e.headers;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(l.xJi, {
                title: 'Open Positions',
                description: 'A collection of the current open positions',
              }),
              (0, c.jsx)(l.wQF, {
                rows: t,
                headers: n,
                children: function (e) {
                  var t = e.rows,
                    n = e.headers,
                    r = e.getTableProps,
                    i = e.getHeaderProps,
                    o = e.getRowProps;
                  return (0, c.jsxs)(
                    l.iA_,
                    (0, a._)((0, s._)({}, r()), {
                      children: [
                        (0, c.jsx)(l.ssF, {
                          children: (0, c.jsx)(l.SCH, {
                            children: n.map(function (e) {
                              return (0,
                              c.jsx)(l.xDH, (0, a._)((0, s._)({}, i({ header: e })), { children: e.header }), e.id);
                            }),
                          }),
                        }),
                        (0, c.jsx)(l.RMI, {
                          children: t.map(function (e) {
                            return (0, c.jsx)(
                              l.SCH,
                              (0, a._)((0, s._)({}, o({ row: e })), {
                                children: e.cells.map(function (e) {
                                  return (0,
                                  c.jsx)(c.Fragment, { children: (0, c.jsx)(l.pj1, { children: e.id.endsWith('id') ? (0, c.jsx)(c.Fragment, { children: (0, c.jsx)(p(), { href: window.location.href.replace('positions', '') + 'apply?position=' + e.value, children: 'Apply' }) }) : (0, c.jsx)(c.Fragment, { children: e.value }) }, e.id) });
                                }),
                              }),
                              e.id
                            );
                          }),
                        }),
                      ],
                    })
                  );
                },
              }),
            ],
          });
        },
        f = n(7016),
        g = [
          { key: 'title', header: 'Position' },
          { key: 'language', header: 'Language' },
          { key: 'client', header: 'Client' },
          { key: 'location', header: 'Location' },
          { key: 'id', header: 'Apply' },
        ],
        m = function (e) {
          var t = e.url,
            n = e.homepageUrl;
          return (0, c.jsxs)('ul', {
            style: { display: 'flex' },
            children: [
              (0, c.jsx)('li', {
                children: (0, c.jsx)(l.rUS, { href: t, children: 'GitHub' }),
              }),
              n &&
                (0, c.jsxs)('li', {
                  children: [
                    (0, c.jsx)('span', { children: '\xa0|\xa0' }),
                    (0, c.jsx)(l.rUS, { href: n, children: 'Homepage' }),
                  ],
                }),
            ],
          });
        },
        x = function () {
          var e = (0, i._)((0, u.useState)(0), 2),
            t = e[0],
            n = e[1],
            h = (0, i._)((0, u.useState)(10), 2),
            p = h[0],
            x = h[1],
            _ = (0, i._)((0, u.useState)(!0), 2),
            j = _[0],
            w = _[1],
            y = (0, i._)((0, u.useState)(), 2),
            k = y[0];
          y[1];
          var b = (0, i._)((0, u.useState)([]), 2),
            v = b[0],
            S = b[1];
          return ((0, u.useEffect)(function () {
            function e() {
              return (e = (0, r._)(function () {
                return (0, o.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, (0, f.k8)()];
                    case 1:
                      return (
                        S(
                          e.sent().map(function (e) {
                            return (0,
                            a._)((0, s._)({}, e), { key: e.id, stars: e.stargazers_count, issueCount: e.open_issues_count, createdAt: new Date(e.created_at).toLocaleDateString(), updatedAt: new Date(e.updated_at).toLocaleDateString(), links: (0, c.jsx)(m, { url: e.html_url, homepageUrl: e.homepage }) });
                          })
                        ),
                        w(!1),
                        [2]
                      );
                  }
                });
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, []),
          j)
            ? (0, c.jsx)(l.rjZ, {
                children: (0, c.jsx)(l.sgG, {
                  lg: 16,
                  md: 8,
                  sm: 4,
                  className: 'repo-page__r1',
                  children: (0, c.jsx)(l.gqd, {
                    columnCount: g.length + 1,
                    rowCount: 10,
                    headers: g,
                  }),
                }),
              })
            : k
            ? 'Error! '.concat(k)
            : (0, c.jsx)(l.rjZ, {
                className: 'repo-page',
                children: (0, c.jsxs)(l.sgG, {
                  lg: 16,
                  md: 8,
                  sm: 4,
                  className: 'repo-page__r1',
                  children: [
                    (0, c.jsx)(d, { headers: g, rows: v.slice(t, t + p) }),
                    (0, c.jsx)(l.tlE, {
                      totalItems: v.length,
                      backwardText: 'Previous page',
                      forwardText: 'Next page',
                      pageSize: p,
                      pageSizes: [5, 10, 15, 25],
                      itemsPerPageText: 'Items per page',
                      onChange: function (e) {
                        var t = e.page,
                          r = e.pageSize;
                        r !== p && x(r), n(r * (t - 1));
                      },
                    }),
                  ],
                }),
              });
        };
    },
  },
  function (e) {
    e.O(0, [6, 846, 253, 698, 744], function () {
      return e((e.s = 8619));
    }),
      (_N_E = e.O());
  },
]);
