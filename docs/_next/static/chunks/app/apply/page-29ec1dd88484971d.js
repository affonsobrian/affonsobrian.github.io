(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    6604: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 8845));
    },
    7016: function (e, t, n) {
      'use strict';
      n.d(t, {
        W3: function () {
          return h;
        },
        bG: function () {
          return u;
        },
        bt: function () {
          return l;
        },
        k8: function () {
          return i;
        },
      });
      var s,
        r = n(6312),
        a = n(8466);
      function i() {
        return o.apply(this, arguments);
      }
      function o() {
        return (o = (0, r._)(function () {
          var e, t, n;
          return (0, a.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                (e = 'https://backend.azvd.net/positions/'), (s.label = 1);
              case 1:
                return s.trys.push([1, 4, , 5]), [4, fetch(e)];
              case 2:
                if (!(t = s.sent()).ok)
                  throw Error('Request failed with status '.concat(t.status));
                return [4, t.json()];
              case 3:
                return [2, s.sent()];
              case 4:
                throw (
                  ((n = s.sent()),
                  Error('Error in getPositions: '.concat(n.message)))
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function l(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, r._)(function (e) {
          var t, n, s;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                (t = 'https://backend.azvd.net/positions/' + e + '/'),
                  (r.label = 1);
              case 1:
                return r.trys.push([1, 4, , 5]), [4, fetch(t)];
              case 2:
                if (!(n = r.sent()).ok)
                  throw Error('Request failed with status '.concat(n.status));
                return [4, n.json()];
              case 3:
                return [2, r.sent()];
              case 4:
                throw (
                  ((s = r.sent()),
                  Error('Error in getPosition: '.concat(s.message)))
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function u(e, t, n, s) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, r._)(function (e, t, n, s) {
          var r, i, o, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                (r = { name: e, company: t, email: n, message: s }),
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
                      body: JSON.stringify(r),
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
                    (l = a.sent()).message
                  ),
                  l)
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var h =
        ((s = (0, r._)(function (e, t, n, s, r, i) {
          var o, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  a.trys.push([0, 3, , 4]),
                  (o = new FormData()).append('name', e),
                  o.append('email', t),
                  o.append('linkedin', n),
                  o.append('salary_expectation', s),
                  o.append('resume_file', r),
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
                if (!(l = a.sent()).ok)
                  throw Error('HTTP error! Status: '.concat(l.status));
                return [4, l.json()];
              case 2:
                return [2, a.sent()];
              case 3:
                throw (
                  (console.error('Error creating application:', (c = a.sent())),
                  c)
                );
              case 4:
                return [2];
            }
          });
        })),
        function (e, t, n, r, a, i) {
          return s.apply(this, arguments);
        });
    },
    8845: function (e, t, n) {
      'use strict';
      n.r(t);
      var s = n(6312),
        r = n(8344),
        a = n(8466),
        i = n(9268),
        o = n(6006),
        l = n(6622),
        c = n(7016);
      t.default = function () {
        var e,
          t = (0, r._)((0, o.useState)(!1), 2),
          n = t[0],
          u = t[1],
          p = (0, r._)(
            (0, o.useState)({
              title: '',
              language: '',
              client: '',
              location: '',
              description: '',
            }),
            2
          ),
          h = p[0],
          d = p[1],
          f = (0, r._)((0, o.useState)(!1), 2),
          m = f[0],
          x = f[1],
          g = (0, r._)((0, o.useState)(!0), 2),
          b = g[0],
          y = g[1],
          j = (0, r._)((0, o.useState)(!1), 2),
          v = j[0],
          _ = j[1],
          k = (0, r._)((0, o.useState)(null), 2),
          w = k[0],
          S = k[1],
          E = (0, r._)((0, o.useState)(''), 2),
          C = E[0],
          T = E[1],
          z = (0, r._)((0, o.useState)(''), 2),
          J = z[0],
          q = z[1],
          A = (0, r._)((0, o.useState)(''), 2),
          N = A[0],
          P = A[1],
          D = (0, r._)((0, o.useState)(0), 2),
          L = D[0],
          B = D[1],
          K = (0, r._)((0, o.useState)(null), 2),
          O = K[0],
          R = K[1],
          U = (0, r._)((0, o.useState)(''), 2),
          M = U[0],
          V = U[1];
        (0, o.useEffect)(function () {
          var e;
          ((e = (0, s._)(function () {
            var e;
            return (0, a.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  V(
                    (e = new URLSearchParams(window.location.search)).get(
                      'position'
                    )
                  ),
                    (t.label = 1);
                case 1:
                  return (
                    t.trys.push([1, 3, 4, 5]), [4, (0, c.bt)(e.get('position'))]
                  );
                case 2:
                  return d(t.sent()), [3, 5];
                case 3:
                  return (
                    console.error(
                      'Error fetching position data:',
                      t.sent().message
                    ),
                    [3, 5]
                  );
                case 4:
                  return y(!1), [7];
                case 5:
                  return [2];
              }
            });
          })),
          function () {
            return e.apply(this, arguments);
          })();
        }, []);
        var W =
            ((e = (0, s._)(function () {
              return (0, a.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      e.trys.push([0, 2, 3, 4]),
                      u(!0),
                      [4, (0, c.W3)(C, J, N, L, O, M)]
                    );
                  case 1:
                    return (
                      console.log('Application created:', e.sent()),
                      x(!1),
                      [3, 4]
                    );
                  case 2:
                    return (
                      console.error('Error creating application:', e.sent()),
                      S('Please fill all fields.'),
                      setTimeout(function () {
                        S(null);
                      }, 8e3),
                      [3, 4]
                    );
                  case 3:
                    return (
                      u(!1),
                      _(!0),
                      setTimeout(function () {
                        _(!1);
                      }, 8e3),
                      [7]
                    );
                  case 4:
                    return [2];
                }
              });
            })),
            function () {
              return e.apply(this, arguments);
            }),
          F = function () {
            _(!1), S(null);
          };
        return (0, i.jsx)(l.rjZ, {
          style: { maxWidth: '800px', padding: '20px' },
          children: (0, i.jsx)(l.sgG, {
            lg: 16,
            md: 8,
            sm: 4,
            className: 'repo-page__r1',
            children: b
              ? (0, i.jsxs)('div', {
                  children: [
                    (0, i.jsx)(l.q0K, {}),
                    (0, i.jsx)(l.zvo, {}),
                    (0, i.jsx)(l.zvo, {}),
                    (0, i.jsx)(l.zvo, {}),
                    (0, i.jsx)(l.q0K, {}),
                    (0, i.jsx)(l.q0K, {}),
                    (0, i.jsx)(l.q0K, {}),
                    (0, i.jsx)(l.q0K, {}),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(l.Db, {}),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)('h1', { children: h.title }),
                    (0, i.jsxs)(l.Vp9, {
                      children: ['Language: ', h.language],
                    }),
                    (0, i.jsxs)(l.Vp9, { children: ['Client: ', h.client] }),
                    (0, i.jsxs)(l.Vp9, {
                      children: ['Location: ', h.location],
                    }),
                    (0, i.jsx)('div', {
                      dangerouslySetInnerHTML: { __html: h.description },
                      style: { width: '100%' },
                    }),
                    (0, i.jsx)(l.zxk, {
                      style: { width: '100%' },
                      onClick: function () {
                        return x(!0);
                      },
                      disabled: n || b,
                      children: n ? 'Applying...' : 'Apply',
                    }),
                    (0, i.jsx)(l.u_l, {
                      open: m,
                      onRequestClose: function () {
                        x(!1);
                      },
                      onRequestSubmit: W,
                      primaryButtonText: 'Apply',
                      children: (0, i.jsxs)('div', {
                        style: { padding: '16px' },
                        children: [
                          (0, i.jsx)('h2', {
                            children: 'Apply for this position',
                          }),
                          (0, i.jsx)('br', {}),
                          (0, i.jsx)(l.oil, {
                            id: 'name',
                            labelText: 'Name',
                            value: C,
                            placeholder: 'John Doe',
                            onChange: function (e) {
                              return T(e.target.value);
                            },
                            style: { marginBottom: '16px' },
                          }),
                          (0, i.jsx)(l.oil, {
                            id: 'email',
                            labelText: 'Email',
                            value: J,
                            placeholder: 'john.doe@email.com',
                            onChange: function (e) {
                              return q(e.target.value);
                            },
                            style: { marginBottom: '16px' },
                          }),
                          (0, i.jsx)(l.oil, {
                            id: 'linkedinLink',
                            labelText: 'LinkedIn',
                            value: N,
                            placeholder: 'https://linkedin.com/in/john.doe',
                            onChange: function (e) {
                              return P(e.target.value);
                            },
                            style: { marginBottom: '16px' },
                          }),
                          (0, i.jsx)(l.Y2U, {
                            id: 'salaryExpectation',
                            min: 0,
                            max: 1e3,
                            label: 'Salary Expectation (USD/h)',
                            invalidText: 'Number is not valid',
                            hideSteppers: !0,
                            onChange: function (e) {
                              B(e.target ? Number(e.target.value) : 0);
                            },
                          }),
                          (0, i.jsx)('br', {}),
                          (0, i.jsx)(l.bAu, {
                            labelTitle: 'Upload Resume',
                            labelDescription:
                              'Max file size is 50 Mb. Only .pdf files are supported.',
                            buttonLabel: 'Add resume',
                            buttonKind: 'primary',
                            size: 'md',
                            filenameStatus: 'edit',
                            accept: ['.pdf'],
                            multiple: !1,
                            disabled: !1,
                            iconDescription: 'Delete file',
                            name: '',
                            onChange: function (e) {
                              var t = e.target.files;
                              R(t && t.length > 0 ? t[0] : null);
                            },
                          }),
                        ],
                      }),
                    }),
                    v &&
                      (0, i.jsx)(l.Jn6, {
                        kind: 'success',
                        title: 'Success',
                        subtitle: 'Application submitted successfully!',
                        caption: '',
                        style: {
                          position: 'fixed',
                          top: '64px',
                          left: '16px',
                          transform: 'translate(0, 0)',
                          transition: 'transform 0.5s ease-in-out',
                        },
                        onCloseButtonClick: F,
                      }),
                    w &&
                      (0, i.jsx)(l.Jn6, {
                        kind: 'error',
                        title: 'Error',
                        subtitle: w,
                        caption: '',
                        style: {
                          position: 'fixed',
                          top: '64px',
                          left: '16px',
                          transform: 'translate(0, 0)',
                          transition: 'transform 0.5s ease-in-out',
                        },
                        onCloseButtonClick: F,
                      }),
                  ],
                }),
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [6, 253, 698, 744], function () {
      return e((e.s = 6604));
    }),
      (_N_E = e.O());
  },
]);
