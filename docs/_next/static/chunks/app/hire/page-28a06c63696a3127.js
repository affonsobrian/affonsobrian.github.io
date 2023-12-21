(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    1873: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 3871));
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
          return u;
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
      function u(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, s._)(function (e) {
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
          var s, i, o, u;
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
                    (u = a.sent()).message
                  ),
                  u)
                );
              case 5:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var p =
        ((r = (0, s._)(function (e, t, n, r, s, i) {
          var o, u, c;
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
                if (!(u = a.sent()).ok)
                  throw Error('HTTP error! Status: '.concat(u.status));
                return [4, u.json()];
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
        function (e, t, n, s, a, i) {
          return r.apply(this, arguments);
        });
    },
    3871: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(6312),
        s = n(8378),
        a = n(7986),
        i = n(6429),
        o = n(8344),
        u = n(8466),
        c = n(9268),
        l = n(6006),
        h = n(6622),
        p = n(7016);
      t.default = function () {
        var e,
          t = (0, o._)(
            (0, l.useState)({
              fullName: '',
              company: '',
              email: '',
              message: '',
            }),
            2
          ),
          n = t[0],
          d = t[1],
          f = (0, o._)((0, l.useState)(!1), 2),
          m = f[0],
          y = f[1],
          g = (0, o._)((0, l.useState)(null), 2),
          w = g[0],
          x = g[1],
          b = (0, o._)((0, l.useState)(!1), 2),
          v = b[0],
          j = b[1],
          _ = function (e, t) {
            d(function (n) {
              return (0, i._)((0, a._)({}, n), (0, s._)({}, e, t));
            });
          },
          k = function () {
            x(null), j(!1);
          },
          E =
            ((e = (0, r._)(function () {
              return (0, u.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      e.trys.push([0, 2, 3, 4]),
                      y(!0),
                      [4, (0, p.bG)(n.fullName, n.company, n.email, n.message)]
                    );
                  case 1:
                    return (
                      e.sent(),
                      j(!0),
                      d({ fullName: '', company: '', email: '', message: '' }),
                      setTimeout(function () {
                        window.location.href = window.location.href.replace(
                          '/hire',
                          ''
                        );
                      }, 8e3),
                      [3, 4]
                    );
                  case 2:
                    return (
                      e.sent(),
                      j(!1),
                      x('Please fill all fields.'),
                      setTimeout(function () {
                        k();
                      }, 8e3),
                      [3, 4]
                    );
                  case 3:
                    return y(!1), [7];
                  case 4:
                    return [2];
                }
              });
            })),
            function () {
              return e.apply(this, arguments);
            });
        return (0, c.jsx)(h.rjZ, {
          children: (0, c.jsx)(h.sgG, {
            lg: 16,
            md: 8,
            sm: 4,
            className: 'repo-page__r1',
            children: (0, c.jsxs)('div', {
              style: {
                display: 'grid',
                justifyContent: 'center',
                padding: '20px',
              },
              children: [
                (0, c.jsx)('h1', { children: 'Find Engineers' }),
                (0, c.jsx)('h4', {
                  children:
                    'Share your information below, and we will get in touch with you soon',
                }),
                (0, c.jsx)(h.cwH, {
                  style: { maxWidth: '820px', width: '100%' },
                  children: (0, c.jsxs)(h.Kqy, {
                    gap: 7,
                    children: [
                      (0, c.jsx)(h.oil, {
                        id: 'fullName',
                        labelText: 'Full Name',
                        placeholder: 'John Doe',
                        style: { width: '100%' },
                        value: n.fullName,
                        onChange: function (e) {
                          return _('fullName', e.target.value);
                        },
                        required: !0,
                      }),
                      (0, c.jsx)(h.oil, {
                        id: 'company',
                        labelText: 'Company',
                        placeholder: 'Company LLC',
                        style: { width: '100%' },
                        value: n.company,
                        onChange: function (e) {
                          return _('company', e.target.value);
                        },
                        required: !0,
                      }),
                      (0, c.jsx)(h.oil, {
                        id: 'email',
                        labelText: 'Email',
                        placeholder: 'john.doe@company.com',
                        style: { width: '100%' },
                        value: n.email,
                        onChange: function (e) {
                          return _('email', e.target.value);
                        },
                        required: !0,
                      }),
                      (0, c.jsx)(h.Kx8, {
                        id: 'message',
                        labelText: 'Message',
                        placeholder: "I'd like to hire a Python developer...",
                        style: { width: '100%' },
                        value: n.message,
                        onChange: function (e) {
                          return _('message', e.target.value);
                        },
                        required: !0,
                      }),
                      (0, c.jsx)(h.zxk, {
                        style: { width: '100%' },
                        onClick: E,
                        disabled: m,
                        children: m ? 'Submitting...' : 'Submit',
                      }),
                      w &&
                        (0, c.jsx)(h.Jn6, {
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
                          onCloseButtonClick: k,
                        }),
                      v &&
                        (0, c.jsx)(h.Jn6, {
                          kind: 'success',
                          title: 'Success',
                          subtitle:
                            'Message sent successfully! Redirecting you to the home page.',
                          caption: '',
                          style: {
                            position: 'fixed',
                            top: '64px',
                            left: '16px',
                            transform: 'translate(0, 0)',
                            transition: 'transform 0.5s ease-in-out',
                          },
                        }),
                    ],
                  }),
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
      return e((e.s = 1873));
    }),
      (_N_E = e.O());
  },
]);
