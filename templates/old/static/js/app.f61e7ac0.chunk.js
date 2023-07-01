(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    142: function (e, t, i) {
      e.exports = i.p + "static/media/image 37.ab102466.png";
    },
    194: function (e, t, i) {
      e.exports = i.p + "static/media/image 39.e1079211.png";
    },
    243: function (e, t, i) {
      e.exports = i.p + "static/media/image 38.615c6036.png";
    },
    255: function (e, t, i) {
      e.exports = i.p + "static/media/loginBg.d01d7323.jpeg";
    },
    256: function (e, t, i) {
      e.exports = i.p + "static/media/pin.d8438664.png";
    },
    338: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i(24),
        n = i.n(r),
        a = i(9),
        o = i.n(a),
        l = i(8),
        d = i(0),
        s = i.n(d),
        c = i(550),
        u = i(5),
        h = i(22),
        f = i(99),
        g = i(4),
        p = function (e) {
          var t = e.children;
          return Object(g.jsxs)(u.default, {
            style: j.ScreenWrapper,
            children: [Object(g.jsx)(f.default, { hidden: !1 }), t],
          });
        },
        j = l.default.create({
          ScreenWrapper: {
            flex: 1,
            paddingTop: "ios" === h.default.OS ? 30 : 10,
            paddingHorizontal: 8,
            backgroundColor: "white",
            minHeight: "100%",
          },
        }),
        b = i(544),
        y = i(40),
        m = i(7),
        v = i(19),
        x = i(39),
        O = i(36),
        w = i(76),
        S = [
          'Search "Insurance"',
          'Search "Car Services and Maintenance"',
          'Search for "Car Accessories"',
          'Search "Car Care Services"',
          'Search "Finance"',
          'Search "New Launches"',
          'Search "Used cars"',
          'Search "Brand New Cars"',
          'Search "MUVs"',
          'Search "SUVs"',
          'Search "Vans"',
          'Search "Hatchbacks"',
          'Search "Sedans"',
        ],
        _ = function (e) {
          var t = e.navigation,
            i = Object(d.useState)(S[0]),
            r = o()(i, 2),
            n = r[0],
            a = r[1],
            l = 0;
          return (
            Object(d.useEffect)(function () {
              var e = setInterval(function () {
                a(S[l]), (l = (l + 1) % S.length);
              }, 2e3);
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(g.jsxs)(u.default, {
              style: C.searchCont,
              children: [
                Object(g.jsxs)(v.default, {
                  style: C.intoch,
                  onPress: function () {
                    t.navigate("searchCar");
                  },
                  children: [
                    Object(g.jsx)(x.MagnifyingGlassIcon, {
                      size: 25,
                      color: "#0D4C92",
                    }),
                    Object(g.jsx)(m.default, {
                      placeholderTextColor: "grey",
                      placeholder: 'Searh  "Your Car"',
                      style: C.Textbar,
                      children: n,
                    }),
                  ],
                }),
                Object(g.jsxs)(u.default, {
                  style: C.micro,
                  children: [
                    Object(g.jsx)(u.default, { style: C.verticalBar }),
                    Object(g.jsx)(O.MicrophoneIcon, {
                      size: 20,
                      color: "#0D4C92",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        C = l.default.create({
          searchCont: {
            width: "98%",
            alignSelf: "center",
            borderRadius: 16,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderColor: "black",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            padding: 10,
            marginBottom: 10,
          },
          intoch: { flexDirection: "row", alignItems: "center" },
          micro: { flexDirection: "row", alignItems: "center" },
          verticalBar: {
            height: 30,
            borderWidth: 0.2,
            borderColor: "black",
            marginHorizontal: 10,
          },
          Textbar: { paddingLeft: 7, outlineStyle: "none", flex: 1 },
        }),
        k =
          (l.default.create({ btnCont: {}, text: { borderWidth: 0.8 } }),
          "#677987"),
        z = "#2F4858",
        R = "#fff",
        B = "green",
        I = "#000",
        P = "black",
        T = "#FFA500",
        M = function (e) {
          return Object(g.jsx)(u.default, {
            style: W.container,
            children: Object(g.jsx)(m.default, {
              style: W.text,
              children:
                "Arena" == e.text
                  ? "Arena World"
                  : "Nexa" == e.text
                  ? "Nexa Lifestyle"
                  : e.text,
            }),
          });
        },
        W = l.default.create({
          container: {
            paddingVertical: 10,
            justifyContent: "flex-start",
            padding: 10,
          },
          text: { fontSize: 15, fontWeight: "700", color: z },
        }),
        A = i(27),
        D = i(25);
      function V(e) {
        var t = e.toString();
        if (t.length > 3) {
          for (var i = "", r = 0, n = t.length - 1; n >= 0; n--)
            (i += t[n]),
              n < t.length - 1 && n > 0 && ++r % 2 === 0 && (i += ",");
          t = "";
          for (var a = i.length - 1; a >= 0; a--) t += i[a];
          return t;
        }
        return t;
      }
      var E = function (e) {
          var t = e.data,
            i = e.navigation;
          return Object(g.jsx)(g.Fragment, {
            children: Object(g.jsx)(A.default, {
              data: t,
              keyExtractor: function (e, t) {
                return t;
              },
              showsHorizontalScrollIndicator: !1,
              horizontal: !0,
              renderItem: function (e) {
                var t = e.item;
                return Object(g.jsx)(u.default, {
                  style: H.containerWrapper,
                  children: Object(g.jsxs)(v.default, {
                    underlayColor: "orange",
                    onPress: function () {
                      return i.navigate(t[0].page_navigation, {
                        var_id: t[0].id,
                        item_id: t[0].itemlist,
                      });
                    },
                    style: H.cardContainer,
                    children: [
                      Object(g.jsx)(u.default, {
                        style: { width: 110, height: 100 },
                        children: Object(g.jsx)(D.default, {
                          source: t[0].images[0],
                          style: H.img,
                        }),
                      }),
                      Object(g.jsxs)(u.default, {
                        style: H.TextCont,
                        children: [
                          Object(g.jsx)(m.default, {
                            style: H.imgText,
                            children: t[0].title,
                          }),
                          Object(g.jsx)(m.default, {
                            style: H.desc,
                            children: "Ex-showroom Price /-",
                          }),
                          Object(g.jsxs)(m.default, {
                            style: H.offer,
                            children: [V(t[0].price), " /-"],
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            }),
          });
        },
        H = l.default.create({
          cardContainer: {
            width: 300,
            height: 100,
            flexDirection: "row",
            borderRadius: 12,
            backgroundColor: R,
            marginHorizontal: 5,
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
          },
          desc: { fontSize: 13, color: k, marginTop: 10 },
          img: { width: "100%", height: "100%", resizeMode: "contain" },
          imgText: {
            fontSize: 14,
            fontWeight: "600",
            color: "#000",
            paddingRight: 10,
          },
          TextCont: {
            width: 180,
            paddingLeft: 0,
            alignItems: "flex-start",
            justifyContent: "center",
          },
          containerWrapper: { paddingVertical: 10 },
        }),
        N = i(281),
        F = Object(N.create)({
          baseURL: "http://superapi.kalyanicrm.com/",
          withCredentials: !1,
        }),
        L =
          (i(393),
          function (e) {
            return F.get("showcases/get_itemlist" + e);
          }),
        Y = function (e) {
          return F.get("showcases/get_itemdesc" + e);
        },
        q = function () {
          return F.get("showcases/get_category");
        },
        G = function (e) {
          return F.get("showcases/get_itemlist" + e);
        },
        K = function (e) {
          return F.get("showcases/get_dist_itemdesc" + e);
        },
        U = function (e) {
          return F.post("showcases/get_color_itemdesc/", e);
        },
        X = function (e) {
          return F.post(
            "https://api.in.kaleyra.io/v1/HXIN1756628118IN/verify",
            e,
            {
              headers: {
                "api-key": "Afb321cdf738fcaeb559af67cb91f6749",
                "Content-type": "application/json",
              },
            }
          );
        },
        J = function (e) {
          return F.post(
            "https://api.in.kaleyra.io/v1/HXIN1756628118IN/verify/validate",
            e,
            {
              headers: {
                "api-key": "Afb321cdf738fcaeb559af67cb91f6749",
                "Content-type": "application/json",
              },
            }
          );
        },
        Q = function () {
          return F.get("promotions/get_banners");
        },
        Z = function (e) {
          return F.post("showcases/create_enquiry/", e);
        },
        $ = function (e) {
          return F.post("promotions/get_featured_item/", e);
        },
        ee = function (e) {
          return F.post("utilities/make_wishlist/", e);
        },
        te = function (e) {
          return F.put("utilities/make_wishlist/" + e + "/");
        },
        ie = function (e) {
          return F.get("utilities/make_wishlist/" + e);
        },
        re = function (e) {
          return F.post("utilities/get_user/", e);
        },
        ne = function (e) {
          return F.post("auth/users/", e);
        },
        ae = function (e) {
          return F.post("utilities/profile_detail/", e);
        },
        oe = function (e) {
          return F.post("utilities/login/", e);
        },
        le = function (e) {
          return F.post("showcases/search_item/", e);
        },
        de = function (e) {
          var t = e.title,
            i = e.onPress,
            r = e.direction;
          return Object(g.jsxs)(v.default, {
            style: se.container,
            onPress: i,
            children: [
              Object(g.jsx)(m.default, { style: se.title, children: t }),
              "up" === r
                ? Object(g.jsx)(O.ChevronDoubleUpIcon, {
                    size: 15,
                    color: "#0D4C92",
                  })
                : Object(g.jsx)(O.ChevronDoubleDownIcon, {
                    size: 15,
                    color: "#0D4C92",
                  }),
            ],
          });
        },
        se = l.default.create({
          container: {
            width: "97%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            padding: 6,
            alignSelf: "center",
            borderRadius: 8,
            borderColor: k,
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            marginTop: 10,
          },
          title: { fontSize: 12, paddingRight: 5, fontWeight: "500", color: k },
        }),
        ce = function (e) {
          var t = e.navigation,
            i = e.data,
            r = Object(d.useState)([]),
            n = o()(r, 2),
            a = n[0],
            l = n[1];
          return (
            Object(d.useEffect)(
              function () {
                l(i);
              },
              [i]
            ),
            Object(g.jsxs)(g.Fragment, {
              children: [
                Object(g.jsx)(A.default, {
                  data: a,
                  numColumns: 3,
                  keyExtractor: function (e) {
                    return e.id;
                  },
                  renderItem: function (e) {
                    var i = e.item;
                    return Object(g.jsxs)(v.default, {
                      style: ue.container,
                      onPress: function () {
                        return t.navigate(i.page_navigation, { id: i.id });
                      },
                      children: [
                        Object(g.jsx)(u.default, {
                          style: {
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 3 },
                            shadowRadius: 10,
                            elevation: 3,
                            paddingLeft: 10,
                            borderRadius: 12,
                            backgroundColor: R,
                            marginVertical: 10,
                            alignSelf: "center",
                            marginLeft: 10,
                            marginRight: 10,
                            flex: 1,
                          },
                          children: Object(g.jsx)(D.default, {
                            source: i.images[0],
                            style: ue.img,
                          }),
                        }),
                        Object(g.jsx)(m.default, {
                          style: ue.title,
                          children: i.name,
                        }),
                      ],
                    });
                  },
                }),
                Object(g.jsx)(de, {
                  title: "see more",
                  onPress: function () {
                    t.navigate("Arena", { id: 1 });
                  },
                  direction: "down",
                }),
              ],
            })
          );
        },
        ue = l.default.create({
          container: {
            height: 100,
            width: 80,
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            justifyContent: "center",
          },
          img: {
            height: 60,
            width: 60,
            borderRadius: 10,
            backgroundColor: R,
            elevation: 5,
            resizeMode: "contain",
          },
          title: { color: z, fontWeight: "500", fontSize: 12 },
        }),
        he = function (e) {
          var t = e.data,
            i = e.navigation;
          return Object(g.jsx)(A.default, {
            horizontal: !0,
            data: t,
            showsHorizontalScrollIndicator: !1,
            keyExtractor: function (e, t) {
              return t;
            },
            renderItem: function (e) {
              var t = e.item;
              return Object(g.jsx)(u.default, {
                style: fe.containerWrapper,
                children: Object(g.jsxs)(v.default, {
                  style: fe.container,
                  onPress: function () {
                    return i.navigate(t[0].page_navigation, {
                      var_id: t[0].id,
                      item_id: t[0].itemlist,
                    });
                  },
                  children: [
                    Object(g.jsx)(D.default, {
                      source: t[0].images[0],
                      style: fe.img,
                    }),
                    Object(g.jsx)(u.default, {
                      style: fe.subCont,
                      children: Object(g.jsx)(m.default, {
                        style: fe.title,
                        children: t[0].title,
                      }),
                    }),
                    Object(g.jsxs)(u.default, {
                      style: { paddingBottom: 15, paddingLeft: 10 },
                      children: [
                        Object(g.jsx)(m.default, {
                          style: fe.desc,
                          children: "Ex-showroom Price /-",
                        }),
                        Object(g.jsxs)(m.default, {
                          style: fe.offer,
                          children: [V(t[0].price), " /-"],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
          });
        },
        fe = l.default.create({
          container: {
            width: 180,
            height: 210,
            borderRadius: 12,
            position: "relative",
            marginRight: 10,
            backgroundColor: R,
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 12,
            elevation: 3,
          },
          desc: { fontSize: 13, color: k, marginTop: 10 },
          offer: { fontSize: 14, fontWeight: "600" },
          containerWrapper: { padding: 0, height: 220 },
          img: {
            width: "100%",
            height: "55%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            resizeMode: "contain",
          },
          like: {
            position: "absolute",
            right: 13,
            top: 12,
            backgroundColor: R,
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          },
          offerSection: {
            height: 25,
            position: "absolute",
            bottom: 0,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: "blue",
            width: "100%",
            opacity: 0.4,
          },
          offerText: {
            padding: 4,
            color: "black",
            position: "absolute",
            bottom: 0,
            fontSize: 14,
            fontWeight: "600",
            color: "black",
          },
          rating: { color: R, fontSize: 12, fontWeight: "600" },
          ratingCont: {
            flexDirection: "row",
            backgroundColor: B,
            paddingHorizontal: 6,
            paddingVertical: 3,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "space-between",
          },
          subCont: {
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
          subText: {
            paddingHorizontal: 10,
            paddingVertical: 2,
            fontSize: 13,
            fontWeight: "500",
            color: k,
          },
          title: { fontSize: 16, fontWeight: "600", color: z },
        }),
        ge =
          (l.default.create({
            container: {
              width: "97%",
              height: 280,
              resizeMode: "cover",
              borderRadius: 12,
              position: "relative",
              alignSelf: "center",
              backgroundColor: R,
              marginTop: 15,
              marginBottom: 5,
              shadowColor: "gray",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 3,
            },
            hrLine: {
              borderWidth: 0.5,
              backgroundColor: "#ff008",
              width: "90%",
              alignSelf: "center",
            },
            img: {
              height: "60%",
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
            like: {
              position: "absolute",
              right: 23,
              top: 12,
              backgroundColor: R,
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            },
            rating: { color: R, fontSize: 12, fontWeight: "600" },
            ratingCont: {
              flexDirection: "row",
              backgroundColor: B,
              paddingHorizontal: 6,
              paddingVertical: 3,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "space-between",
            },
            subCont: {
              paddingHorizontal: 10,
              paddingTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
            subText: {
              paddingBottom: 12,
              fontSize: 13,
              fontWeight: "500",
              color: k,
            },
            title: { fontSize: 16, fontWeight: "600", color: z },
          }),
          function (e) {
            var t = e.navigation,
              i = e.data,
              r = Object(d.useState)([]),
              n = o()(r, 2),
              a = n[0],
              l = n[1];
            return (
              Object(d.useEffect)(
                function () {
                  l(i);
                },
                [i]
              ),
              Object(g.jsx)(g.Fragment, {
                children: a
                  ? Object(g.jsx)(A.default, {
                      horizontal: !0,
                      showsHorizontalScrollIndicator: !1,
                      data: a,
                      keyExtractor: function (e) {
                        return e.id;
                      },
                      renderItem: function (e) {
                        var i = e.item;
                        return Object(g.jsx)(v.default, {
                          style: { padding: 2 },
                          onPress: function (e) {
                            return (function (e, i) {
                              t.navigate(e.target.textContent, {
                                id: i,
                                ModelId: i,
                              });
                            })(e, i.id);
                          },
                          children: Object(g.jsx)(u.default, {
                            style: {
                              padding: 6,
                              borderRadius: 10,
                              height: 35,
                              width: 80,
                              marginTop: 10,
                              alignItems: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 10,
                              marginBottom: 5,
                              shadowColor: "gray",
                              shadowOpacity: 0.26,
                              shadowOffset: { width: 0, height: 2 },
                              shadowRadius: 10,
                              elevation: 3,
                            },
                            children: Object(g.jsx)(m.default, {
                              style: {
                                alignSelf: "center",
                                marginTop: 2,
                                color: z,
                                fontSize: 12,
                                fontWeight: "600",
                              },
                              children: i.title,
                            }),
                          }),
                        });
                      },
                    })
                  : null,
              })
            );
          }),
        pe = i(16),
        je = i(32),
        be = i(167),
        ye = i.n(be),
        me = i(282),
        ve = function () {
          return Object(g.jsx)(u.default, {
            style: { flex: 1, justifyContent: "center" },
            children: Object(g.jsx)(me.InstagramLoader, { active: !0 }),
          });
        },
        xe = (l.default.create({}), je.default.get("window").width - 20),
        Oe = function (e) {
          var t = e.banner,
            i = Object(d.useState)(new pe.default.Value(-200)),
            r = o()(i, 1)[0],
            n = Object(d.useState)(new pe.default.Value(0)),
            a = o()(n, 1)[0],
            l = Object(d.useState)([]),
            s = o()(l, 2),
            c = s[0],
            h = s[1];
          Object(d.useEffect)(function () {
            f();
            var e = pe.default.timing(a, {
                toValue: 1,
                duration: 1e3,
                useNativeDriver: !0,
              }),
              t = pe.default.timing(r, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: !0,
              });
            pe.default.parallel([e, t]).start();
          }, []);
          var f = function () {
            var e = t.filter(function (e) {
              return "text" === e.promotion_type;
            });
            h(e);
          };
          return Object(g.jsx)(g.Fragment, {
            children:
              c.length > 0
                ? Object(g.jsx)(pe.default.View, {
                    style: { opacity: a, transform: [{ translateX: r }] },
                    children: Object(g.jsx)(ye.a, {
                      autoplay: !0,
                      autoplayTimeout: 4300,
                      loop: !0,
                      index: 0,
                      pageSize: xe,
                      showsPageIndicator: !1,
                      children: c.map(function (e, t) {
                        return Object(g.jsx)(
                          u.default,
                          {
                            style: { padding: 2 },
                            children: Object(g.jsxs)(u.default, {
                              style: {
                                width: "100%",
                                height: 65,
                                backgroundColor: "#d4f8fc",
                                padding: 8,
                                alignSelf: "center",
                                flexDirection: "row",
                                alignItems: "center",
                                borderRadius: 10,
                                shadowOffset: { width: 0, height: 2 },
                                shadowColor: "grey",
                                shadowRadius: 10,
                                shadowOpacity: 0.26,
                                elevation: 5,
                              },
                              children: [
                                Object(g.jsx)(D.default, {
                                  source: {
                                    uri:
                                      "http://superapi.kalyanicrm.com" +
                                      e.image,
                                  },
                                  style: { height: 70, width: 70 },
                                }),
                                Object(g.jsxs)(u.default, {
                                  style: { flex: 1, width: "90%", padding: 5 },
                                  children: [
                                    Object(g.jsx)(m.default, {
                                      style: {
                                        fontWeight: "700",
                                        marginLeft: 10,
                                        fontSize: 16,
                                        paddingVertical: 5,
                                        color: z,
                                      },
                                      children: e.title,
                                    }),
                                    Object(g.jsx)(m.default, {
                                      style: {
                                        fontWeight: "600",
                                        marginLeft: 10,
                                        fontSize: 12,
                                        color: k,
                                        flexWrap: "wrap",
                                      },
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t
                        );
                      }),
                    }),
                  })
                : Object(g.jsx)(ve, {}),
          });
        },
        we = i(176),
        Se = function (e) {
          e.navigation;
          return Object(g.jsxs)(u.default, {
            style: _e.Header,
            children: [
              Object(g.jsx)(O.MapPinIcon, { size: 30, color: "#0D4C92" }),
              Object(g.jsxs)(u.default, {
                style: _e.addressCont,
                children: [
                  Object(g.jsx)(m.default, {
                    style: _e.headerText,
                    children: "Home",
                  }),
                  Object(g.jsx)(m.default, {
                    style: _e.headerAddress,
                    children: "KALYANI MOTORS PVT LTD, Pantara",
                  }),
                ],
              }),
              Object(g.jsxs)(u.default, {
                style: _e.iconCont,
                children: [
                  Object(g.jsx)(v.default, {
                    children: Object(g.jsx)(O.WalletIcon, {
                      size: 30,
                      color: "#0D4C92",
                    }),
                  }),
                  Object(g.jsx)(v.default, {
                    onPress: function () {
                      return we.openURL("activity_login://LoginActivity");
                    },
                    children: Object(g.jsx)(O.UserCircleIcon, {
                      size: 30,
                      color: "#eee",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        _e = l.default.create({
          addressCont: { flex: 1, paddingHorizontal: 5 },
          iconCont: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: 70,
          },
          Header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingBottom: 10,
          },
          headerAddress: { fontSize: 12, color: k },
          headerText: { fontSize: 16, fontWeight: "600", color: z },
        }),
        Ce = i(10),
        ke = i.n(Ce),
        ze = i(11),
        Re = i.n(ze),
        Be = i(15),
        Ie = i.n(Be),
        Pe = i(17),
        Te = i.n(Pe),
        Me = i(6),
        We = i.n(Me);
      function Ae(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = We()(e);
          if (t) {
            var n = We()(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return Te()(this, i);
        };
      }
      var De = je.default.get("window").width - 20,
        Ve = (function (e) {
          Ie()(i, e);
          var t = Ae(i);
          function i(e) {
            var r;
            return (
              ke()(this, i),
              ((r = t.call(this, e)).state = { images: [] }),
              (r.getFilteredData = function () {
                var e = r.props.banner.filter(function (e) {
                  return "image" === e.promotion_type && null !== e.image;
                });
                r.setState({ images: e });
              }),
              r
            );
          }
          return (
            Re()(i, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getFilteredData();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(g.jsx)(u.default, {
                    style: Ee.container,
                    children: this.state.images
                      ? Object(g.jsx)(ye.a, {
                          autoplay: !0,
                          autoplayTimeout: 3e3,
                          loop: !0,
                          index: 0,
                          pageSize: De,
                          showsPageIndicator: !1,
                          children: this.state.images.map(function (e, t) {
                            return Object(g.jsx)(
                              u.default,
                              {
                                children: Object(g.jsx)(D.default, {
                                  style: {
                                    width: De,
                                    height: 150,
                                    borderRadius: 10,
                                    marginTop: 5,
                                    resizeMode: "contain",
                                  },
                                  source: {
                                    uri:
                                      "http://superapi.kalyanicrm.com" +
                                      e.image,
                                  },
                                }),
                              },
                              t
                            );
                          }),
                        })
                      : Object(g.jsx)(g.Fragment, {}),
                  });
                },
              },
            ]),
            i
          );
        })(s.a.Component),
        Ee = l.default.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
          },
        }),
        He = function (e) {
          var t = e.navigation,
            i = (e.route, Object(d.useState)(!1)),
            r = o()(i, 2),
            a = r[0],
            l = r[1],
            s = Object(d.useState)([]),
            c = o()(s, 2),
            h = c[0],
            f = c[1],
            j = Object(d.useState)([]),
            b = o()(j, 2),
            m = b[0],
            v = b[1],
            x = Object(d.useState)([]),
            O = o()(x, 2),
            w = O[0],
            S = O[1],
            C = Object(d.useState)([]),
            k = o()(C, 2),
            z = k[0],
            R = k[1],
            B = Object(d.useState)([]),
            I = o()(B, 2),
            P = I[0],
            T = I[1],
            W = Object(d.useState)([]),
            A = o()(W, 2),
            D = A[0],
            V = A[1];
          Object(d.useEffect)(
            function () {
              H();
            },
            [a]
          );
          var H = function () {
              N(),
                F(1),
                L({ title: "Primary" }),
                Y({ title: "Secondary" }),
                K({ title: "Focused" }),
                U();
            },
            N = (function () {
              var e = n()(function* () {
                var e = yield q();
                v(e.data);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = n()(function* (e) {
                var t = yield G("/" + e);
                f(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            L = (function () {
              var e = n()(function* (e) {
                var t = yield $(e);
                S(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Y = (function () {
              var e = n()(function* (e) {
                var t = yield $(e);
                R(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            K = (function () {
              var e = n()(function* (e) {
                var t = yield $(e);
                T(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            U = (function () {
              var e = n()(function* (e) {
                var t = yield Q(e);
                V(t.data), l(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(g.jsx)(p, {
            children: Object(g.jsxs)(y.default, {
              showsVerticalScrollIndicator: !1,
              style: { backgroundColor: "white", flex: 1 },
              children: [
                Object(g.jsx)(Se, {
                  navigation: function (e) {
                    return t(e);
                  },
                }),
                Object(g.jsx)(_, { navigation: t }),
                a
                  ? Object(g.jsxs)(u.default, {
                      children: [
                        Object(g.jsx)(ge, { data: m, navigation: t }),
                        Object(g.jsx)(u.default, {
                          children: Object(g.jsx)(Oe, { banner: D }),
                        }),
                        Object(g.jsx)(u.default, {
                          style: { alignItems: "center" },
                          children: Object(g.jsx)(Ve, { banner: D }),
                        }),
                        Object(g.jsx)(M, {
                          text: "The Perfect Fit for Your Life Style ",
                        }),
                        Object(g.jsx)(E, { data: P, navigation: t }),
                        Object(g.jsx)(M, { text: "Cars That Move Your Mind" }),
                        Object(g.jsx)(ce, { navigation: t, data: h }),
                        Object(g.jsx)(M, {
                          text: "Our Wide Range Of Popular Cars ",
                        }),
                        Object(g.jsx)(E, { data: w, navigation: t }),
                        Object(g.jsx)(M, {
                          text: "Discover the joy of driving",
                        }),
                        Object(g.jsx)(he, { data: z, navigation: t }),
                      ],
                    })
                  : Object(g.jsxs)(g.Fragment, {
                      children: [
                        Object(g.jsx)(ve, {}),
                        Object(g.jsx)(ve, {}),
                        Object(g.jsx)(ve, {}),
                      ],
                    }),
              ],
            }),
          });
        },
        Ne =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              i = e.route,
              r = Object(d.useState)([]),
              a = o()(r, 2),
              l = a[0],
              s = a[1],
              c = Object(d.useState)(!0),
              h = o()(c, 2),
              f = h[0],
              p = h[1],
              j = i.params.id;
            i.params.ModelId;
            Object(d.useEffect)(function () {
              b("/" + j);
            }, []);
            var b = (function () {
              var e = n()(function* (e) {
                var t = yield L(e);
                s(t.data), p(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return Object(g.jsx)(g.Fragment, {
              children: f
                ? Object(g.jsx)(ve, {})
                : Object(g.jsx)(u.default, {
                    style: {
                      flex: 1,
                      width: "100%",
                      justifyContent: "space-around",
                    },
                    children: Object(g.jsx)(A.default, {
                      data: l,
                      numColumns: 2,
                      keyExtractor: function (e) {
                        return e.id;
                      },
                      showsVerticalScrollIndicator: !1,
                      renderItem: function (e) {
                        var i = e.item;
                        return Object(g.jsxs)(v.default, {
                          onPress: function (e) {
                            return (function (e) {
                              t.navigate(e.page_navigation, { id: e.id });
                            })(i);
                          },
                          style: {
                            flex: 1,
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 3 },
                            shadowRadius: 10,
                            elevation: 3,
                            paddingLeft: 10,
                            borderRadius: 12,
                            backgroundColor: R,
                            marginVertical: 10,
                            alignSelf: "center",
                            marginLeft: 10,
                            marginRight: 10,
                          },
                          children: [
                            Object(g.jsx)(D.default, {
                              source: { uri: i.images[0] },
                              style: {
                                width: "100%",
                                height: 150,
                                resizeMode: "contain",
                              },
                            }),
                            Object(g.jsx)(u.default, {
                              style: {
                                padding: 5,
                                alignItems: "center",
                                marginBottom: 5,
                              },
                              children: Object(g.jsx)(m.default, {
                                style: { fontWeight: "500", fontSize: 13 },
                                children: i.title,
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                  }),
            });
          }),
        Fe = function (e) {
          var t = e.navigation,
            i = e.route,
            r = Object(d.useState)([]),
            n = o()(r, 2);
          n[0], n[1];
          return Object(g.jsxs)(p, {
            children: [
              Object(g.jsx)(Se, {}),
              Object(g.jsx)(_, { navigation: t }),
              Object(g.jsx)(M, { text: i.name }),
              Object(g.jsx)(y.default, {
                showsVerticalScrollIndicator: !1,
                style: { backgroundColor: "#fff", flex: 1 },
                children: Object(g.jsx)(Ne, {
                  navigation: t,
                  heading: i.name,
                  route: i,
                }),
              }),
            ],
          });
        },
        Le =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              i = e.id,
              r = Object(d.useState)([]),
              a = o()(r, 2),
              l = a[0],
              s = a[1],
              c = Object(d.useState)(!0),
              u = o()(c, 2),
              h = u[0],
              f = u[1];
            Object(d.useEffect)(function () {
              j(i);
            }, []);
            var p = window.location.search,
              j =
                (new URLSearchParams(p).get("ModelId"),
                (function () {
                  var e = n()(function* () {
                    var e = yield K("/" + i);
                    s(e.data), f(!1);
                  });
                  return function () {
                    return e.apply(this, arguments);
                  };
                })());
            return Object(g.jsx)(g.Fragment, {
              children: h
                ? Object(g.jsx)(ve, {})
                : Object(g.jsx)(A.default, {
                    data: l,
                    keyExtractor: function (e) {
                      return e.id.toString();
                    },
                    numColumns: 2,
                    showsVerticalScrollIndicator: !1,
                    renderItem: function (e) {
                      var r = e.item;
                      e.index;
                      return Object(g.jsxs)(v.default, {
                        style: Ye.container,
                        onPress: function () {
                          var e;
                          (e = r.id),
                            t.navigate("details", { var_id: e, item_id: i });
                        },
                        children: [
                          Object(g.jsx)(D.default, {
                            source: { uri: r.images[0] },
                            style: Ye.img,
                          }),
                          Object(g.jsx)(m.default, {
                            style: Ye.Heading,
                            children: r.title,
                          }),
                        ],
                      });
                    },
                  }),
            });
          }),
        Ye = l.default.create({
          container: {
            flex: 1,
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 10,
            elevation: 3,
            paddingLeft: 10,
            borderRadius: 12,
            backgroundColor: R,
            marginVertical: 10,
            alignSelf: "center",
            marginLeft: 10,
            marginRight: 10,
          },
          Heading: {
            fontWeight: "500",
            fontSize: 13,
            textAlign: "center",
            paddingBottom: 10,
          },
          img: { width: "100%", height: 150, resizeMode: "contain" },
        }),
        qe = function (e) {
          var t = e.navigation,
            i = e.route;
          return Object(g.jsxs)(p, {
            children: [
              Object(g.jsx)(Se, {}),
              Object(g.jsx)(_, { navigation: t }),
              Object(g.jsx)(M, { text: "Modified for you" }),
              Object(g.jsx)(y.default, {
                showsVerticalScrollIndicator: !1,
                style: { backgroundColor: "#fff", flex: 1 },
                children: Object(g.jsx)(Le, { navigation: t, id: i.params.id }),
              }),
            ],
          });
        },
        Ge = (l.default.create({}), i(57)),
        Ke = i(123),
        Ue = i(81),
        Xe = i(317),
        Je = i(135),
        Qe = i.n(Je),
        Ze = i(552),
        $e = function (e) {
          var t = e.navigation,
            i = e.route,
            r = Object(d.useState)(0),
            a = o()(r, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)("#d0e25b"),
            h = o()(c, 2),
            f = (h[0], h[1]),
            j = Object(d.useState)([]),
            b = o()(j, 2),
            x = b[0],
            w = b[1],
            S = Object(d.useState)(null),
            C = o()(S, 2),
            I = C[0],
            T = C[1],
            W = Object(d.useState)([]),
            E = o()(W, 2),
            H = E[0],
            N = E[1],
            F = Object(d.useState)([]),
            L = o()(F, 2),
            q = L[0],
            G = L[1],
            X = Object(d.useState)(!1),
            J = o()(X, 2),
            Q = J[0],
            Z = J[1],
            $ = Object(d.useState)(0),
            ie = o()($, 2),
            re = (ie[0], ie[1]),
            ne = Object(d.useState)([]),
            ae = o()(ne, 2),
            oe = ae[0],
            le = ae[1],
            se = Object(d.useState)(0),
            ce = o()(se, 2),
            ue = (ce[0], ce[1]),
            he = Object(d.useState)(!1),
            fe = o()(he, 2),
            ge = fe[0],
            pe = fe[1],
            je = Object(d.useState)(9.5),
            be = o()(je, 2),
            ye = be[0],
            me = be[1],
            ve = Object(d.useState)(60),
            xe = o()(ve, 2),
            Oe = xe[0],
            we = xe[1],
            _e = Object(d.useState)(0),
            Ce = o()(_e, 2),
            ke = Ce[0],
            ze = Ce[1],
            Re = Object(d.useState)(0),
            Be = o()(Re, 2),
            Ie = Be[0],
            Pe = Be[1],
            Te = Object(d.useState)(0),
            Me = o()(Te, 2),
            We = Me[0],
            Ae = Me[1],
            De = Object(d.useState)(1e5),
            Ve = o()(De, 2),
            Ee = Ve[0],
            He = Ve[1],
            Ne = Object(d.useState)(0),
            Fe = o()(Ne, 2),
            Le = Fe[0],
            Ye = Fe[1],
            qe = Object(d.useState)(0),
            Je = o()(qe, 2),
            $e = Je[0],
            tt = (Je[1], Object(d.useState)(!1)),
            it = o()(tt, 2),
            rt = it[0],
            nt = it[1],
            at = Object(d.useState)({}),
            ot = o()(at, 2),
            lt = ot[0],
            dt = ot[1],
            st = i.params.var_id;
          console.log("details page route", i.params),
            Object(d.useEffect)(function () {
              ut(st), ht(i.params.item_id);
            }, []),
            Object(d.useEffect)(
              function () {
                ct();
              },
              [Ee, Ie, Oe, ye, We, $e]
            );
          var ct = function () {
              var e = ye / 100,
                t = We - Ee;
              Pe(t), He(We - t);
              var i = t * ((e / 12) * Oe) + t,
                r = i / Oe;
              Ye(i), ze(r);
            },
            ut = (function () {
              var e = n()(function* (e) {
                var t = yield Y("/" + e);
                N(t.data),
                  ft(t.data[0].title),
                  G(t.data[0].spec.slice(0, 8)),
                  Z(!0),
                  Ae(t.data[0].price);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ht = (function () {
              var e = n()(function* (e) {
                var t = yield K("/" + e);
                le(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ft = (function () {
              var e = n()(function* (e) {
                var t = yield U({ title: e });
                w(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            gt = (function () {
              var e = n()(function* (e) {
                var t = yield ee({ profile: 1, item: e });
                dt(t.data), nt(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            pt = (function () {
              var e = n()(function* (e) {
                yield te(e);
                nt(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(g.jsx)(p, {
            children: Object(g.jsxs)(y.default, {
              showsVerticalScrollIndicator: !1,
              style: { backgroundColor: "#fff", flex: 1 },
              children: [
                Object(g.jsx)(Se, {}),
                Object(g.jsx)(_, { navigation: t }),
                0 != H.length
                  ? Object(g.jsxs)(g.Fragment, {
                      children: [
                        Object(g.jsx)(M, { text: H[0].subtitle }),
                        Object(g.jsxs)(u.default, {
                          style: {
                            width: "97%",
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 10,
                            elevation: 3,
                            padding: 10,
                            borderRadius: 12,
                            backgroundColor: R,
                            marginVertical: 10,
                            alignSelf: "center",
                          },
                          children: [
                            Object(g.jsx)(D.default, {
                              source: { uri: H[0].images[l] },
                              style: {
                                height: 200,
                                width: "100%",
                                marginVertical: 7,
                                borderRadius: 12,
                              },
                            }),
                            Object(g.jsx)(u.default, {
                              style: {},
                              children: Object(g.jsx)(A.default, {
                                data: H[0].images,
                                keyExtractor: function (e) {
                                  return e;
                                },
                                horizontal: !0,
                                showsHorizontalScrollIndicator: !1,
                                renderItem: function (e) {
                                  var t = e.item,
                                    i = e.index;
                                  return Object(g.jsx)(v.default, {
                                    style: { margin: 3, width: 35, height: 23 },
                                    onPress: function () {
                                      s(i);
                                    },
                                    children: Object(g.jsx)(D.default, {
                                      source: { uri: t },
                                      style: {
                                        width: "100%",
                                        height: "100%",
                                        resizeMode: "cover",
                                        borderRadius: 4,
                                      },
                                    }),
                                  });
                                },
                              }),
                            }),
                            Object(g.jsx)(Ke.default, {
                              children: Object(g.jsx)(Ue.BottomSheet, {
                                visible: 1 === I,
                                onBackButtonPress: function () {
                                  T(null);
                                },
                                onBackdropPress: function () {
                                  T(null);
                                },
                                children: Object(g.jsxs)(u.default, {
                                  style: et.bottomNavigationView,
                                  children: [
                                    Object(g.jsx)(u.default, {
                                      style: {
                                        shadowColor: "gray",
                                        textAlign: "center",
                                        shadowOpacity: 0.26,
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowRadius: 5,
                                        elevation: 1,
                                        width: "100%",
                                      },
                                      children: Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 20,
                                          fontWeight: "600",
                                          padding: 7,
                                        },
                                        children: "Please Choose the Color",
                                      }),
                                    }),
                                    Object(g.jsx)(A.default, {
                                      showsVerticalScrollIndicator: !1,
                                      horizontal: !0,
                                      data: x,
                                      renderItem: function (e) {
                                        var t = e.item,
                                          i = e.index;
                                        return Object(g.jsxs)(v.default, {
                                          style: {
                                            width: 150,
                                            height: 180,
                                            margin: 15,
                                            shadowOpacity: 0.26,
                                            shadowOffset: {
                                              width: 0,
                                              height: 1,
                                            },
                                            shadowRadius: 5,
                                            elevation: 3,
                                            padding: 8,
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderRadius: 12,
                                          },
                                          onPress: function () {
                                            f(t.color),
                                              T(null),
                                              re(i),
                                              ut(t.id);
                                          },
                                          children: [
                                            Object(g.jsx)(D.default, {
                                              source: { uri: t.images[0] },
                                              style: {
                                                width: 120,
                                                height: 120,
                                                resizeMode: "contain",
                                              },
                                            }),
                                            Object(g.jsx)(m.default, {
                                              style: {
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: P,
                                                textAlign: "center",
                                              },
                                              children: t.color,
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(g.jsx)(Ke.default, {
                              children: Object(g.jsx)(Ue.BottomSheet, {
                                visible: 2 === I,
                                onBackButtonPress: function () {
                                  T(null);
                                },
                                onBackdropPress: function () {
                                  T(null);
                                },
                                children: Object(g.jsxs)(u.default, {
                                  style: et.bottomNavigationView,
                                  children: [
                                    Object(g.jsx)(u.default, {
                                      style: {
                                        shadowColor: "gray",
                                        textAlign: "center",
                                        shadowOpacity: 0.26,
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowRadius: 5,
                                        elevation: 1,
                                        marginBottom: 5,
                                        width: "100%",
                                      },
                                      children: Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 20,
                                          fontWeight: "600",
                                          padding: 7,
                                        },
                                        children: "Please select Your Variant",
                                      }),
                                    }),
                                    Object(g.jsx)(A.default, {
                                      horizontal: !0,
                                      showsVerticalScrollIndicator: !1,
                                      data: oe,
                                      renderItem: function (e) {
                                        var t = e.item;
                                        return Object(g.jsxs)(v.default, {
                                          underlayColor: "orange",
                                          onPress: function () {
                                            ue(t.id), T(null), ut(t.id);
                                          },
                                          style: {
                                            margin: 15,
                                            marginVertical: 20,
                                            shadowOpacity: 0.26,
                                            shadowOffset: {
                                              width: 0,
                                              height: 1,
                                            },
                                            shadowRadius: 5,
                                            elevation: 3,
                                            padding: 8,
                                            alignItems: "center",
                                            borderRadius: 12,
                                          },
                                          children: [
                                            Object(g.jsx)(D.default, {
                                              source: { uri: t.images[0] },
                                              style: {
                                                width: 150,
                                                height: 150,
                                                resizeMode: "contain",
                                              },
                                            }),
                                            Object(g.jsx)(m.default, {
                                              style: {
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: P,
                                              },
                                              children: t.title,
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(g.jsxs)(v.default, {
                              style: {
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#abe",
                                paddingHorizontal: 10,
                                borderRadius: 6,
                                marginTop: 7,
                                paddingVertical: 4,
                              },
                              onPress: function () {
                                T(1);
                              },
                              children: [
                                Object(g.jsx)(m.default, {
                                  style: {
                                    fontSize: 12,
                                    fontWeight: "700",
                                    flex: 1,
                                    color: "#000",
                                  },
                                  children: H[0].color,
                                }),
                                Object(g.jsxs)(u.default, {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(g.jsx)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        backgroundColor: "#abe",
                                        paddingHorizontal: 10,
                                        borderRadius: 6,
                                      },
                                      children: Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 10,
                                          fontWeight: "600",
                                          flex: 1,
                                          color: "#000",
                                        },
                                        children: "Avalible Colors",
                                      }),
                                    }),
                                    Object(g.jsx)(O.ChevronDownIcon, {
                                      size: 20,
                                      color: "black",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(g.jsxs)(v.default, {
                              onPress: function () {
                                T(2);
                              },
                              style: {
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#abe",
                                paddingHorizontal: 8,
                                paddingVertical: 5,
                                borderRadius: 6,
                                marginTop: 7,
                              },
                              children: [
                                Object(g.jsx)(m.default, {
                                  style: {
                                    fontSize: 12,
                                    fontWeight: "700",
                                    flex: 1,
                                    color: "#000",
                                  },
                                  children: H[0].title,
                                }),
                                Object(g.jsxs)(u.default, {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderRadius: 6,
                                    justifyContent: "space-between",
                                  },
                                  children: [
                                    Object(g.jsx)(m.default, {
                                      style: {
                                        fontSize: 10,
                                        fontWeight: "600",
                                        flex: 1,
                                        color: "#000",
                                        paddingRight: 10,
                                      },
                                      children: "Other Models",
                                    }),
                                    Object(g.jsx)(O.ChevronDownIcon, {
                                      size: 20,
                                      color: "black",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(g.jsxs)(u.default, {
                          style: {
                            width: "97%",
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 10,
                            elevation: 3,
                            padding: 10,
                            borderRadius: 12,
                            backgroundColor: R,
                            alignSelf: "center",
                          },
                          children: [
                            Object(g.jsxs)(u.default, {
                              style: {
                                flexDirection: "row",
                                paddingVertical: 10,
                                justifyContent: "space-between:",
                                alignItems: "center",
                              },
                              children: [
                                Object(g.jsxs)(u.default, {
                                  style: { flex: 1 },
                                  children: [
                                    Object(g.jsx)(m.default, {
                                      style: {
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "green",
                                      },
                                      children: "Ex-Showroom Price",
                                    }),
                                    Object(g.jsxs)(m.default, {
                                      style: {
                                        fontSize: 22,
                                        fontWeight: "700",
                                      },
                                      children: [V(H[0].price), " /-"],
                                    }),
                                  ],
                                }),
                                Object(g.jsx)(v.default, {
                                  style: {
                                    backgroundColor: "#00D09C",
                                    padding: 10,
                                    borderRadius: 12,
                                  },
                                  onPress: function () {
                                    pe(!0);
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "600",
                                      color: "#000",
                                    },
                                    children: "EMI Calculator",
                                  }),
                                }),
                                Object(g.jsx)(Ge.default, {
                                  visible: ge,
                                  transparent: !0,
                                  children: Object(g.jsx)(Ze.default, {
                                    intensity: 40,
                                    tint: "light",
                                    style: {
                                      justifyContent: "center",
                                      alignSelf: "center",
                                      alignItems: "center",
                                      width: "100%",
                                      height: "100%",
                                    },
                                    children: Object(g.jsx)(u.default, {
                                      style: {
                                        width: "90%",
                                        height: 550,
                                        shadowColor: "gray",
                                        shadowOpacity: 0.26,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowRadius: 10,
                                        elevation: 3,
                                        borderRadius: 12,
                                        backgroundColor: "#fff",
                                        alignSelf: "center",
                                      },
                                      children: Object(g.jsxs)(u.default, {
                                        style: { padding: 10 },
                                        children: [
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  fontSize: 18,
                                                  fontWeight: "600",
                                                  color: "#00D09C",
                                                },
                                                children:
                                                  "Plan your loans smarter, with our EMI calculator",
                                              }),
                                              Object(g.jsx)(v.default, {
                                                style: {
                                                  padding: 3,
                                                  shadowColor: "gray",
                                                  shadowOpacity: 0.26,
                                                  shadowOffset: {
                                                    width: 0,
                                                    height: 3,
                                                  },
                                                  shadowRadius: 10,
                                                  elevation: 3,
                                                  borderRadius: "50%",
                                                  backgroundColor: R,
                                                  alignSelf: "center",
                                                },
                                                onPress: function () {
                                                  return pe(!1);
                                                },
                                                children: Object(g.jsx)(
                                                  O.XMarkIcon,
                                                  { size: 20, color: "black" }
                                                ),
                                              }),
                                            ],
                                          }),
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                            },
                                            children: [
                                              Object(g.jsxs)(u.default, {
                                                style: {
                                                  alignItems: "center",
                                                  paddingVertical: 15,
                                                  justifyContent: "center",
                                                },
                                                children: [
                                                  Object(g.jsxs)(m.default, {
                                                    style: {
                                                      fontSize: 18,
                                                      fontWeight: "700",
                                                      paddingRight: 8,
                                                      textAlign: "center",
                                                    },
                                                    children: [
                                                      "\u20b9 ",
                                                      Le.toFixed(2),
                                                      " /-",
                                                    ],
                                                  }),
                                                  Object(g.jsxs)(m.default, {
                                                    style: {
                                                      textAlign: "center",
                                                      fontSize: 14,
                                                      fontWeight: "600",
                                                      color: "grey",
                                                    },
                                                    children: [
                                                      "Total Amount ",
                                                      "\n",
                                                      "(Principle + Interest)",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(g.jsxs)(u.default, {
                                                style: {
                                                  alignItems: "center",
                                                  paddingVertical: 15,
                                                  justifyContent: "center",
                                                  paddingRight: 10,
                                                },
                                                children: [
                                                  Object(g.jsxs)(m.default, {
                                                    style: {
                                                      fontSize: 18,
                                                      fontWeight: "600",
                                                      paddingRight: 8,
                                                      textAlign: "center",
                                                    },
                                                    children: [
                                                      "\u20b9 ",
                                                      ke.toFixed(2),
                                                      "/-",
                                                    ],
                                                  }),
                                                  Object(g.jsxs)(m.default, {
                                                    style: {
                                                      textAlign: "center",
                                                      fontSize: 12,
                                                      fontWeight: "600",
                                                      color: "grey",
                                                    },
                                                    children: [
                                                      "Indicative EMI ",
                                                      "\n",
                                                      " Per/Months.",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(g.jsx)(u.default, {
                                            style: {
                                              marginVertical: 25,
                                              width: "90%",
                                              height: 0.5,
                                              backgroundColor: "grey",
                                              alignSelf: "center",
                                            },
                                          }),
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: "Down Payment",
                                              }),
                                              Object(g.jsxs)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: [
                                                  "\u20b9 ",
                                                  V(Ee),
                                                  " /-",
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(g.jsx)(Qe.a, {
                                            style: {
                                              width: "95%",
                                              alignSelf: "center",
                                              height: 40,
                                              paddingHorizontal: 10,
                                            },
                                            minimumValue: 0,
                                            maximumValue: 2e5,
                                            minimumTrackTintColor: "#F74300",
                                            maximumTrackTintColor: "#ECEDEF",
                                            onValueChange: He,
                                            step: 1,
                                            value: Ee,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: "Loan Amount",
                                              }),
                                              Object(g.jsxs)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: [
                                                  "\u20b9 ",
                                                  V(Ie),
                                                  " /-",
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(g.jsx)(Qe.a, {
                                            style: {
                                              width: "95%",
                                              alignSelf: "center",
                                              height: 40,
                                              paddingHorizontal: 10,
                                            },
                                            minimumValue: 0,
                                            maximumValue: 3e6,
                                            minimumTrackTintColor: "#F74300",
                                            maximumTrackTintColor: "#ECEDEF",
                                            onValueChange: Pe,
                                            step: 1,
                                            value: Ie,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: "Tenure",
                                              }),
                                              Object(g.jsxs)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: [Oe, " / Months"],
                                              }),
                                            ],
                                          }),
                                          Object(g.jsx)(Qe.a, {
                                            style: {
                                              width: "95%",
                                              alignSelf: "center",
                                              height: 40,
                                              paddingHorizontal: 10,
                                            },
                                            minimumValue: 0,
                                            maximumValue: 240,
                                            minimumTrackTintColor: "#F74300",
                                            maximumTrackTintColor: "#ECEDEF",
                                            onValueChange: we,
                                            step: 1,
                                            value: Oe,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(g.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: "Interest",
                                              }),
                                              Object(g.jsxs)(m.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: z,
                                                },
                                                children: [ye, " %"],
                                              }),
                                            ],
                                          }),
                                          Object(g.jsx)(Qe.a, {
                                            style: {
                                              width: "95%",
                                              alignSelf: "center",
                                              height: 40,
                                              paddingHorizontal: 10,
                                            },
                                            minimumValue: 0,
                                            maximumValue: 30,
                                            minimumTrackTintColor: "#F74300",
                                            maximumTrackTintColor: "#ECEDEF",
                                            onValueChange: me,
                                            step: 0.1,
                                            value: ye,
                                            thumbTintColor: "#F74300",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(g.jsxs)(u.default, {
                              style: {
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: 10,
                              },
                              children: [
                                rt
                                  ? Object(g.jsx)(v.default, {
                                      style: {
                                        backgroundColor: "green",
                                        padding: 10,
                                        width: "49%",
                                        borderRadius: 12,
                                        textAlign: "center",
                                      },
                                      onPress: function () {
                                        return pt(lt.id);
                                      },
                                      children: Object(g.jsx)(m.default, {
                                        style: {
                                          color: "white",
                                          fontSize: 14,
                                          fontWeight: "600",
                                        },
                                        children: "Wishlist Added",
                                      }),
                                    })
                                  : Object(g.jsx)(v.default, {
                                      style: {
                                        backgroundColor: "#F74300",
                                        padding: 10,
                                        width: "49%",
                                        borderRadius: 12,
                                        textAlign: "center",
                                      },
                                      onPress: function () {
                                        return gt(H[0].id);
                                      },
                                      children: Object(g.jsx)(m.default, {
                                        style: {
                                          color: "white",
                                          fontSize: 14,
                                          fontWeight: "600",
                                        },
                                        children: "Wishlist",
                                      }),
                                    }),
                                Object(g.jsx)(v.default, {
                                  style: {
                                    backgroundColor: "#F74300",
                                    padding: 10,
                                    width: "49%",
                                    textAlign: "center",
                                    borderRadius: 12,
                                  },
                                  onPress: function () {
                                    return t.navigate("ebookscreen", i.params);
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      color: "white",
                                      fontSize: 14,
                                      fontWeight: "600",
                                    },
                                    children: "Book Now",
                                  }),
                                }),
                              ],
                            }),
                            Object(g.jsxs)(u.default, {
                              style: { marginTop: 5, paddingLeft: 8 },
                              children: [
                                Object(g.jsxs)(m.default, {
                                  style: {
                                    fontSize: 20,
                                    color: z,
                                    fontWeight: "700",
                                    marginTop: 10,
                                    marginBottom: 5,
                                  },
                                  children: ["About - ", H[0].title],
                                }),
                                Object(g.jsx)(Xe.default, {
                                  numberOfLines: 3,
                                  renderTruncatedFooter: function (e) {
                                    return Object(g.jsx)(m.default, {
                                      style: { color: B, marginTop: 5 },
                                      onPress: e,
                                      children: "Read more",
                                    });
                                  },
                                  renderRevealedFooter: function (e) {
                                    return Object(g.jsx)(m.default, {
                                      style: { color: B, marginTop: 5 },
                                      onPress: e,
                                      children: "Show less",
                                    });
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      color: P,
                                      fontWeight: "600",
                                      color: k,
                                    },
                                    children: H[0].description,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(g.jsxs)(u.default, {
                          style: {
                            width: "97%",
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 10,
                            elevation: 3,
                            borderRadius: 12,
                            backgroundColor: R,
                            marginVertical: 10,
                            alignSelf: "center",
                          },
                          children: [
                            Object(g.jsx)(m.default, {
                              style: {
                                padding: 10,
                                fontSize: 20,
                                fontWeight: "700",
                                color: z,
                              },
                              children: "Key Specifications",
                            }),
                            Object(g.jsx)(u.default, {
                              style: { width: "100%", padding: 10 },
                              children: Q
                                ? Object(g.jsxs)(g.Fragment, {
                                    children: [
                                      Object(g.jsx)(A.default, {
                                        data: q,
                                        keyExtractor: function (e, t) {
                                          return t;
                                        },
                                        numColumns: 2,
                                        renderItem: function (e) {
                                          var t = e.item;
                                          return Object(g.jsxs)(u.default, {
                                            style: {
                                              alignItems: "flex-start",
                                              justifyContent: "center",
                                              flex: 1,
                                              margin: 3,
                                              paddingHorizontal: 8,
                                              paddingVertical: 4,
                                              borderRadius: 8,
                                              borderWidth: 0.5,
                                              borderColor: "#aaa",
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  color: "#aaa",
                                                  fontSize: 12,
                                                },
                                                children: t.item_spec,
                                              }),
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  color: "#484848",
                                                  fontWeight: "600",
                                                  fontSize: 14,
                                                  paddingVertical: 6,
                                                },
                                                children: t.value,
                                              }),
                                            ],
                                          });
                                        },
                                      }),
                                      Object(g.jsx)(u.default, {
                                        style: { marginBottom: 8 },
                                        children: Object(g.jsx)(de, {
                                          title: "See More",
                                          onPress: function () {
                                            return Z(!1);
                                          },
                                          direction: "down",
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(g.jsxs)(g.Fragment, {
                                    children: [
                                      Object(g.jsx)(A.default, {
                                        data: H[0].spec,
                                        keyExtractor: function (e, t) {
                                          return t;
                                        },
                                        numColumns: 2,
                                        renderItem: function (e) {
                                          var t = e.item;
                                          return Object(g.jsxs)(u.default, {
                                            style: {
                                              alignItems: "flex-start",
                                              justifyContent: "center",
                                              flex: 1,
                                              margin: 3,
                                              paddingHorizontal: 8,
                                              paddingVertical: 4,
                                              borderRadius: 8,
                                              borderWidth: 0.5,
                                              borderColor: "#aaa",
                                            },
                                            children: [
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  color: "#aaa",
                                                  fontSize: 12,
                                                },
                                                children: t.item_spec,
                                              }),
                                              Object(g.jsx)(m.default, {
                                                style: {
                                                  color: "#484848",
                                                  fontWeight: "600",
                                                  fontSize: 14,
                                                  paddingVertical: 6,
                                                },
                                                children: t.value,
                                              }),
                                            ],
                                          });
                                        },
                                      }),
                                      Object(g.jsx)(u.default, {
                                        style: { marginBottom: 8 },
                                        children: Object(g.jsx)(de, {
                                          title: "See Less",
                                          onPress: function () {
                                            return Z(!0);
                                          },
                                          direction: "up",
                                        }),
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        Object(g.jsx)(u.default, {
                          style: {
                            width: "97%",
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 10,
                            elevation: 3,
                            padding: 8,
                            borderRadius: 12,
                            backgroundColor: R,
                            alignSelf: "center",
                          },
                          children: Object(g.jsx)(M, {
                            text: "Crafted for excellence",
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          });
        },
        et = l.default.create({
          container: {
            flex: 1,
            margin: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0F7FA",
          },
          bottomNavigationView: { backgroundColor: "#fff", height: 300 },
        }),
        tt = i(2),
        it = i.n(tt);
      function rt(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : rt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var at = function () {
          return Object(g.jsxs)(u.default, {
            style: { backgroundColor: "white", width: "100%", flex: 1 },
            children: [
              Object(g.jsxs)(u.default, {
                style: nt(nt({}, ot.box_shadow), ot.profile_card),
                children: [
                  Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsx)(m.default, {
                        style: {
                          fontSize: 18,
                          fontWeight: 600,
                          marginVertical: 4,
                        },
                        children: "Chintu",
                      }),
                      Object(g.jsx)(m.default, {
                        style: { color: "grey" },
                        children: "Shibasankar1997@gmail.com",
                      }),
                    ],
                  }),
                  Object(g.jsx)(u.default, {
                    children: Object(g.jsx)(D.default, {
                      style: ot.profile_img,
                      source: i(426),
                    }),
                  }),
                ],
              }),
              Object(g.jsxs)(y.default, {
                showsVerticalScrollIndicator: !1,
                children: [
                  Object(g.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      marginHorizontal: 6,
                      justifyContent: "space-between",
                    },
                    children: [
                      Object(g.jsx)(v.default, {
                        children: Object(g.jsxs)(u.default, {
                          style: nt(
                            nt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(g.jsx)(x.HeartIcon, {}),
                            Object(g.jsx)(m.default, { children: "Likes" }),
                          ],
                        }),
                      }),
                      Object(g.jsx)(v.default, {
                        children: Object(g.jsxs)(u.default, {
                          style: nt(
                            nt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(g.jsx)(x.CreditCardIcon, {}),
                            Object(g.jsx)(m.default, { children: "Payments" }),
                          ],
                        }),
                      }),
                      Object(g.jsx)(v.default, {
                        children: Object(g.jsxs)(u.default, {
                          style: nt(
                            nt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(g.jsx)(x.Cog6ToothIcon, {}),
                            Object(g.jsx)(m.default, { children: "Settings" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(g.jsxs)(u.default, {
                    style: nt({}, ot.box_shadow),
                    children: [
                      Object(g.jsx)(m.default, {
                        style: { fontWeight: "600" },
                        children: "Your Orders",
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              padding: 3,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(g.jsx)(x.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "90%",
                              paddingVertical: 17,
                              borderBottomWidth: 1,
                              borderColor: "rgba(113, 113, 106, 0.1)",
                            },
                            children: [
                              Object(g.jsx)(m.default, {
                                children: "Your Order",
                              }),
                              Object(g.jsx)(v.default, {
                                children: Object(g.jsx)(x.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(g.jsx)(x.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "90%",
                              paddingVertical: 17,
                              borderBottomWidth: 1,
                              borderColor: "rgba(113, 113, 106, 0.1)",
                            },
                            children: [
                              Object(g.jsx)(m.default, {
                                children: "Your Order",
                              }),
                              Object(g.jsx)(v.default, {
                                children: Object(g.jsx)(x.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsxs)(u.default, {
                    style: nt({}, ot.box_shadow),
                    children: [
                      Object(g.jsx)(m.default, {
                        style: { fontWeight: "600" },
                        children: "Your Orders",
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              padding: 3,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(g.jsx)(x.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "90%",
                              paddingVertical: 17,
                              borderBottomWidth: 1,
                              borderColor: "rgba(113, 113, 106, 0.1)",
                            },
                            children: [
                              Object(g.jsx)(m.default, {
                                children: "Your Order",
                              }),
                              Object(g.jsx)(v.default, {
                                children: Object(g.jsx)(x.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(g.jsx)(x.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "90%",
                              paddingVertical: 17,
                              borderBottomWidth: 1,
                              borderColor: "rgba(113, 113, 106, 0.1)",
                            },
                            children: [
                              Object(g.jsx)(m.default, {
                                children: "Your Order",
                              }),
                              Object(g.jsx)(v.default, {
                                children: Object(g.jsx)(x.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ot = l.default.create({
          profile_card: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
          box_shadow: {
            borderRadius: 12,
            position: "relative",
            marginHorizontal: 10,
            backgroundColor: "white",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 12,
            elevation: 3,
            padding: 15,
            marginVertical: 10,
          },
          profile_img: {
            height: 70,
            width: 70,
            borderRadius: "50%",
            marginHorizontal: 10,
          },
        }),
        lt =
          (i(427),
          function () {
            return Object(g.jsx)(u.default, {
              style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: R,
              },
              children: Object(g.jsx)(m.default, {
                style: { fontSize: 18, fontWeight: "700" },
                children: "Thank You",
              }),
            });
          }),
        dt = (l.default.create({}), i(35)),
        st = function (e) {
          var t = e.img,
            i = e.title,
            r = e.decp;
          return Object(g.jsxs)(u.default, {
            style: {
              padding: 10,
              alignItems: "center",
              backgroundColor: "white",
              shadowColor: "gray",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              borderRadius: 5,
            },
            children: [
              Object(g.jsx)(D.default, {
                source: { uri: t },
                style: { width: 70, height: 70 },
                resizeMode: "contain",
              }),
              Object(g.jsx)(m.default, {
                style: { color: P, fontWeight: "600" },
                children: i,
              }),
              Object(g.jsx)(m.default, {
                style: { color: k, fontWeight: "500" },
                children: r,
              }),
            ],
          });
        },
        ct =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              r = Object(d.useState)(!1),
              n = o()(r, 2),
              a = n[0],
              l = n[1];
            return Object(g.jsxs)(u.default, {
              style: { backgroundColor: "#f2f2f2", flex: 1 },
              children: [
                Object(g.jsx)(u.default, {
                  style: { marginTop: 10 },
                  children: Object(g.jsx)(Se, {
                    navigation: function (e) {
                      return t(e);
                    },
                  }),
                }),
                Object(g.jsxs)(y.default, {
                  showsVerticalScrollIndicator: !1,
                  children: [
                    Object(g.jsx)(D.default, {
                      source: i(428),
                      style: { width: "100%", height: 300 },
                      resizeMode: "contain",
                    }),
                    Object(g.jsx)(m.default, {
                      style: {
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "700",
                      },
                      children: "Get Car Insurance Starting @2678/- year",
                    }),
                    Object(g.jsxs)(u.default, {
                      style: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: 5,
                        marginHorizontal: 5,
                      },
                      children: [
                        Object(g.jsx)(st, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                        Object(g.jsx)(st, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                        Object(g.jsx)(st, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                      ],
                    }),
                    Object(g.jsxs)(u.default, {
                      style: {
                        backgroundColor: "white",
                        alignItems: "center",
                        marginTop: 10,
                        marginHorizontal: 20,
                        shadowColor: "gray",
                        shadowOpacity: 0.26,
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 10,
                        padding: 10,
                        borderRadius: 10,
                        paddingVertical: 30,
                      },
                      children: [
                        Object(g.jsx)(m.default, {
                          style: { color: P, fontWeight: "600", fontSize: 16 },
                          children: "Get upto 85% off no Car Insurance",
                        }),
                        Object(g.jsxs)(u.default, {
                          style: { marginTop: 10 },
                          children: [
                            Object(g.jsx)(m.default, {
                              style: {
                                color: k,
                                fontWeight: "500",
                                fontSize: 12,
                                margin: 3,
                              },
                              children: "Registration Number",
                            }),
                            Object(g.jsx)(dt.default, {
                              placeholder: "Eg: KA 52 V 0120",
                              placeholderTextColor: "grey",
                              style: {
                                marginHorizontal: 10,
                                backgroundColor: "white",
                                padding: 10,
                                width: 300,
                                borderWidth: 1,
                                borderColor: "grey",
                                borderRadius: 8,
                                marginBottom: 10,
                              },
                            }),
                          ],
                        }),
                        Object(g.jsxs)(u.default, {
                          style: { marginTop: 10 },
                          children: [
                            Object(g.jsx)(m.default, {
                              style: {
                                color: k,
                                fontWeight: "500",
                                fontSize: 12,
                                margin: 3,
                              },
                              children: "Phone Number",
                            }),
                            Object(g.jsx)(dt.default, {
                              placeholder: "Phone No.",
                              placeholderTextColor: "grey",
                              style: {
                                marginHorizontal: 10,
                                backgroundColor: "white",
                                padding: 10,
                                width: 300,
                                borderWidth: 1,
                                borderColor: "grey",
                                borderRadius: 8,
                                marginBottom: 10,
                              },
                            }),
                          ],
                        }),
                        Object(g.jsx)(v.default, {
                          style: {
                            backgroundColor: "orangered",
                            padding: 10,
                            width: 200,
                            borderRadius: 8,
                            marginTop: 5,
                          },
                          children: Object(g.jsx)(m.default, {
                            style: {
                              color: R,
                              fontWeight: "600",
                              textAlign: "center",
                            },
                            onPress: function () {
                              l(!0);
                            },
                            children: "Get Quotation",
                          }),
                        }),
                      ],
                    }),
                    Object(g.jsx)(v.default, {
                      children: Object(g.jsx)(m.default, {
                        style: {
                          color: "blue",
                          alignSelf: "flex-end",
                          marginRight: 20,
                          fontWeight: "700",
                          fontSize: 12,
                        },
                        children: "Brand New Car? Click Here",
                      }),
                    }),
                  ],
                }),
                Object(g.jsx)(Ge.default, {
                  visible: a,
                  transparent: !0,
                  children: Object(g.jsx)(Ze.default, {
                    intensity: 40,
                    tint: "light",
                    style: {
                      justifyContent: "center",
                      alignSelf: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    },
                    children: Object(g.jsx)(u.default, {
                      style: {
                        width: "90%",
                        height: 450,
                        shadowColor: "gray",
                        shadowOpacity: 0.26,
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 10,
                        elevation: 3,
                        borderRadius: 12,
                        backgroundColor: "#fff",
                        alignSelf: "center",
                      },
                      children: Object(g.jsxs)(u.default, {
                        style: { marginTop: 20 },
                        children: [
                          Object(g.jsx)(D.default, {
                            source: i(429),
                            style: {
                              width: 200,
                              height: 100,
                              alignSelf: "center",
                            },
                            resizeMode: "contain",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 20,
                              fontWeight: "700",
                              color: "black",
                              alignSelf: "center",
                            },
                            children: "Confirm Car Details",
                          }),
                          Object(g.jsxs)(u.default, {
                            style: {
                              width: "90%",
                              height: 260,
                              borderRadius: 10,
                              backgroundColor: "rgba(0,0,0,0.1)",
                              alignSelf: "center",
                              marginTop: 5,
                              padding: 10,
                            },
                            children: [
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Model :",
                                  }),
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "700",
                                      color: "balck",
                                      paddingLeft: 10,
                                    },
                                    children: "MARUTHI SUZUKI WAGON R",
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Variant :",
                                  }),
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "700",
                                      color: "balck",
                                      paddingLeft: 10,
                                    },
                                    children: "VXI Petrol 988",
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Registration Date :",
                                  }),
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "700",
                                      color: "balck",
                                      paddingLeft: 10,
                                    },
                                    children: "Jan - 2023",
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Policy No :",
                                  }),
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "700",
                                      color: "balck",
                                      paddingLeft: 10,
                                    },
                                    children: "MS822358687VG",
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Policy Expiry :",
                                  }),
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "700",
                                      color: "balck",
                                      paddingLeft: 10,
                                    },
                                    children: "23 - Jan - 2024",
                                  }),
                                ],
                              }),
                              Object(g.jsx)(v.default, {
                                onPress: function () {
                                  t.navigate("thankyou"), l(!1);
                                },
                                style: {
                                  width: 250,
                                  height: 33,
                                  backgroundColor: "orangered",
                                  borderRadius: 5,
                                  textAlign: "center",
                                  alignSelf: "center",
                                  marginTop: 15,
                                },
                                children: Object(g.jsx)(m.default, {
                                  style: {
                                    color: "#fff",
                                    fontSize: 13,
                                    fontWeight: "500",
                                    alignSelf: "center",
                                    marginTop: 5,
                                  },
                                  children: "Contiune",
                                }),
                              }),
                            ],
                          }),
                          Object(g.jsx)(v.default, {
                            children: Object(g.jsx)(m.default, {
                              style: {
                                fontSize: 13,
                                fontWeight: "700",
                                color: "blue",
                                alignSelf: "flex-end",
                                paddingRight: 30,
                                marginTop: 5,
                              },
                              onPress: function () {
                                l(!1);
                              },
                              children: "Edit Details",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            });
          }),
        ut =
          (l.default.create({}),
          [
            {
              id: 1,
              img: i(142),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 2,
              img: i(243),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 3,
              img: i(194),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 4,
              img: i(142),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 5,
              img: i(194),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 6,
              img: i(142),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 7,
              img: i(243),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 8,
              img: i(142),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 9,
              img: i(194),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
          ]),
        ht = function (e) {
          var t = e.navigation;
          return Object(g.jsxs)(p, {
            children: [
              Object(g.jsx)(Se, {}),
              Object(g.jsx)(_, { navigation: t }),
              Object(g.jsxs)(u.default, {
                children: [
                  Object(g.jsx)(M, { text: "Select Your Model" }),
                  Object(g.jsx)(A.default, {
                    data: ut,
                    keyExtractor: function (e) {
                      return e.id;
                    },
                    numColumns: 3,
                    renderItem: function (e) {
                      var i = e.item;
                      return Object(g.jsxs)(v.default, {
                        style: {
                          alignItems: "center",
                          justifyContent: "space-between",
                          flex: 1,
                          margin: 5,
                          borderRadius: 12,
                          shadowColor: "gray",
                          shadowOpacity: 0.26,
                          shadowOffset: { width: 0, height: 2 },
                          shadowRadius: 10,
                          elevation: 3,
                        },
                        onPress: function () {
                          t.navigate("insurance");
                        },
                        children: [
                          Object(g.jsx)(D.default, {
                            source: i.img,
                            style: {
                              width: 80,
                              height: 60,
                              resizeMode: "contain",
                            },
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              padding: 5,
                              fontSize: 12,
                              textAlign: "center",
                              fontWeight: "600",
                              color: k,
                            },
                            children: i.text1,
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              padding: 5,
                              fontSize: 12,
                              textAlign: "center",
                              fontWeight: "600",
                              color: k,
                            },
                            children: i.text2,
                          }),
                          Object(g.jsx)(u.default, {
                            style: {
                              alignSelf: "center",
                              marginBottom: 10,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "orange",
                              padding: 4,
                              borderRadius: 10,
                            },
                            children: Object(g.jsx)(m.default, {
                              style: {
                                fontSize: 14,
                                fontWeight: "600",
                                textAlign: "center",
                              },
                              children: "view Details",
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        };
      l.default.create({});
      function ft(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ft(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ft(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var pt = [
          {
            id: 1,
            title: "Periodic Services",
            description:
              "Get professional car services from Maruti certified silver and bronze technicians",
            image: "service/4V4MB18Z8X_1649936680.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 10,
                service_id: 1,
                title: "First Free Service",
                warranty: "Not Applicable",
                service_period:
                  "1000Km or 1Month which ever is earlier from the date of sale",
                duration: "2 Hours 30Minutes",
                image: "serviceType/XDTfieMWJN_1649769488.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 80,
                    service_id: 10,
                    service: "Free Service",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 81,
                    service_id: 10,
                    service: "All Check Up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 82,
                    service_id: 10,
                    service: "Engine Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 83,
                    service_id: 10,
                    service: "Fuel System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 84,
                    service_id: 10,
                    service: "Clutch & Transmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 85,
                    service_id: 10,
                    service: "Brake System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 86,
                    service_id: 10,
                    service: "Tyres & Wheel Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 87,
                    service_id: 10,
                    service: "Front & Rear Suspension",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 88,
                    service_id: 10,
                    service: "Steering System check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 89,
                    service_id: 10,
                    service: "AC & Electrical Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 90,
                    service_id: 10,
                    service: "Vehicle Body System",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 91,
                    service_id: 10,
                    service: "Pre & Post Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 11,
                service_id: 1,
                title: "Second Free Service",
                warranty: "Not Applicable",
                service_period:
                  "Within 5000 kilometers or 6 month whichever is earlier from the date of sale/invoice.",
                duration: "2 Hours 30 Minutes",
                image: "serviceType/NIgjQFdOU3_1649769479.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 92,
                    service_id: 11,
                    service: "Second Free Service",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 93,
                    service_id: 11,
                    service: "Engine Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 94,
                    service_id: 11,
                    service: "Fuel System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 95,
                    service_id: 11,
                    service: "Clutch & Transmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 96,
                    service_id: 11,
                    service: "Brake System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 97,
                    service_id: 11,
                    service: "Tyres & Wheel Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 98,
                    service_id: 11,
                    service: "Front & Rear Suspension",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 99,
                    service_id: 11,
                    service: "Steering System check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 100,
                    service_id: 11,
                    service: "AC & Electrical Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 101,
                    service_id: 11,
                    service: "Vehicle Body System",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 102,
                    service_id: 11,
                    service: "Pre & Post Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 12,
                service_id: 1,
                title: "Third Free Service",
                warranty: "Not Applicable",
                service_period:
                  "Within 10000 kilometers or 1 Year whichever is earlier from the date of sale/invoice.",
                duration: "2 Hours 30 Minutes",
                image: "serviceType/A3hJCTcYHB_1649769951.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 103,
                    service_id: 12,
                    service: "Third Free Service",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 104,
                    service_id: 12,
                    service: "Scheduled Part Replacement as per Service Manual",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 105,
                    service_id: 12,
                    service: "Engine Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 106,
                    service_id: 12,
                    service: "Fuel System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 107,
                    service_id: 12,
                    service: "Clutch & Transmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 108,
                    service_id: 12,
                    service: "Brake System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 109,
                    service_id: 12,
                    service: "Tyres & Wheel Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 110,
                    service_id: 12,
                    service: "Front & Rear Suspension",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 111,
                    service_id: 12,
                    service: "Steering System check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 112,
                    service_id: 12,
                    service: "AC & Electrical Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 113,
                    service_id: 12,
                    service: "Vehicle Body System",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 114,
                    service_id: 12,
                    service: "Pre & Post Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 13,
                service_id: 1,
                title: "Periodic Service",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "Within 10,000 kilometers or 1 Year whichever is earlier from last date of service.",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/wfDtr5xkPZ_1649770318.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 115,
                    service_id: 13,
                    service: "Periodic Service",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 116,
                    service_id: 13,
                    service: "Scheduled Part Replacement as per Service Manual",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 117,
                    service_id: 13,
                    service: "Engine Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 118,
                    service_id: 13,
                    service: "Fuel System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 119,
                    service_id: 13,
                    service: "Clutch & Transmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 120,
                    service_id: 13,
                    service: "Brake System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 121,
                    service_id: 13,
                    service: "Tyres & Wheel Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 122,
                    service_id: 13,
                    service: "Front & Rear Suspension",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 123,
                    service_id: 13,
                    service: "Steering System check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 124,
                    service_id: 13,
                    service: "AC & Electrical Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 125,
                    service_id: 13,
                    service: "Vehicle Body System",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 126,
                    service_id: 13,
                    service: "Pre & Post Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 14,
                service_id: 1,
                title: "Special Check-up",
                warranty: "Not Applicable",
                service_period:
                  "Any long travel planned or Vehicle unused for long time",
                duration: "2 to 3 Hours",
                image: "serviceType/7feJW3XGPU_1649770616.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 127,
                    service_id: 14,
                    service: "Special Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 128,
                    service_id: 14,
                    service: "Engine Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 129,
                    service_id: 14,
                    service: "Fuel System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 130,
                    service_id: 14,
                    service: "Clutch & Transmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 131,
                    service_id: 14,
                    service: "Brake System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 132,
                    service_id: 14,
                    service: "Tyres & Wheel Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 133,
                    service_id: 14,
                    service: "Front & Rear Suspension Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 134,
                    service_id: 14,
                    service: "Steering System check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 135,
                    service_id: 14,
                    service: "AC & Electrical Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 136,
                    service_id: 14,
                    service: "Vehicle Body System Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            title: "Repair & Maintenance",
            description: "We value your Time - Experience Express Service.",
            image: "service/sNDmocsT2q_1649936696.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 16,
                service_id: 4,
                title: "Engine Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "Depends upon part availability & repairs",
                image: "serviceType/yHVche8e7X_1649769698.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 137,
                    service_id: 16,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 138,
                    service_id: 16,
                    service: "Complete Engine Test",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 139,
                    service_id: 16,
                    service: "Final Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 140,
                    service_id: 16,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 17,
                service_id: 4,
                title: "Suspension Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/G3QoGVXIbW_1649769728.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 141,
                    service_id: 17,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 142,
                    service_id: 17,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 143,
                    service_id: 17,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 18,
                service_id: 4,
                title: "Full Washing",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon the repair",
                image: "serviceType/ECQXL8TvyQ_1649769771.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 144,
                    service_id: 18,
                    service: "Interior Vaccuum Cleaning",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 145,
                    service_id: 18,
                    service: "Wheel Arc Cleaning",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 146,
                    service_id: 18,
                    service: "Floor Mats Cleaning",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 147,
                    service_id: 18,
                    service: "Complete Body Wash",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 148,
                    service_id: 18,
                    service: "Dashboard & Tyre Polish",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 19,
                service_id: 4,
                title: "Emission Check",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon the repair",
                image: "serviceType/EXLxqTNOUI_1649769796.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 149,
                    service_id: 19,
                    service: "Emmission Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 20,
                service_id: 4,
                title: "Radiator Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/SOIp7alKYZ_1649769845.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 150,
                    service_id: 20,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 151,
                    service_id: 20,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 152,
                    service_id: 20,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 21,
                service_id: 4,
                title: "Transmission System Overall",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "Depends upon part availability & repairs",
                image: "serviceType/7KFvyC8uyM_1649769931.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 153,
                    service_id: 21,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 154,
                    service_id: 21,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 155,
                    service_id: 21,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 22,
                service_id: 4,
                title: "Driveshaft Overall",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/lI2VqZ0g6g_1649769975.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 156,
                    service_id: 22,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 157,
                    service_id: 22,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 158,
                    service_id: 22,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 23,
                service_id: 4,
                title: "Differential Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/llwS6RlvKg_1649770000.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 159,
                    service_id: 23,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 160,
                    service_id: 23,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 161,
                    service_id: 23,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 24,
                service_id: 4,
                title: "Steering Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/siZ2dbP44D_1649770034.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 162,
                    service_id: 24,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 163,
                    service_id: 24,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 164,
                    service_id: 24,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 25,
                service_id: 4,
                title: "Clutch Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/mNx8KE8ENH_1649770232.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 165,
                    service_id: 25,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 166,
                    service_id: 25,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 167,
                    service_id: 25,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 26,
                service_id: 4,
                title: "All Brake Cleaning & Overhaul",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/3fVNKucl1l_1649823017.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 168,
                    service_id: 26,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 169,
                    service_id: 26,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 170,
                    service_id: 26,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 27,
                service_id: 4,
                title: "Fuel System Service",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/4tlLWEPG7I_1649770143.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 171,
                    service_id: 27,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 172,
                    service_id: 27,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 173,
                    service_id: 27,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 28,
                service_id: 4,
                title: "All Door Cushioning & Lubrication",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/GcsvBY8sUF_1649770166.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 174,
                    service_id: 28,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 175,
                    service_id: 28,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 176,
                    service_id: 28,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 29,
                service_id: 4,
                title: "All Electrical System Check",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/XmpUuscGpX_1649770202.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 177,
                    service_id: 29,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 178,
                    service_id: 29,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 179,
                    service_id: 29,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            title: "AC Service & Repair",
            description: "You deserve a cool cabin in hot summer!",
            image: "service/awrO9DHAmN_1649936712.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 31,
                service_id: 5,
                title: "AC Service & Repair",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration:
                  "4 to 6 Hours and depends upon part availability & repair",
                image: "serviceType/WWYu0pMicR_1649770412.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 180,
                    service_id: 31,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 181,
                    service_id: 31,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 182,
                    service_id: 31,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 34,
                service_id: 5,
                title: "AC Replacement",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration:
                  "4 to 6 Hours and depends upon part availability & repair",
                image: "serviceType/pcYqX6tiNL_1649770458.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 183,
                    service_id: 34,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 184,
                    service_id: 34,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 185,
                    service_id: 34,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 36,
                service_id: 5,
                title: "A/C Gas Charging Full",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/Wr49TSg5i6_1649770498.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 186,
                    service_id: 36,
                    service: "AC Gas Recharge",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 187,
                    service_id: 36,
                    service: "AC Cooling Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 188,
                    service_id: 36,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 38,
                service_id: 5,
                title: "A/C Gas Leakage Check",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/n9YrVxUqMl_1649770543.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 189,
                    service_id: 38,
                    service: "AC Gas Leakage check & repair",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 190,
                    service_id: 38,
                    service: "AC Cooling Check-up",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 191,
                    service_id: 38,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 40,
                service_id: 5,
                title: "Blower Motor Cleaning",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/Df40WdbzlF_1649770591.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 192,
                    service_id: 40,
                    service: "Blower Cleaning",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 193,
                    service_id: 40,
                    service: "Final Check",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 43,
                service_id: 5,
                title: "AC Condensor Assy R&R",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours and depends upon the repair",
                image: "serviceType/jtAtCK32L2_1649770636.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 194,
                    service_id: 43,
                    service: "Part Replaced as per the requirement",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 195,
                    service_id: 43,
                    service: "Final Inspection",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 196,
                    service_id: 43,
                    service: "Road Test",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
            ],
          },
          {
            id: 6,
            title: "Battery",
            description:
              "Your car deserves the right reserves for all your electrical needs.",
            image: "service/nrT0bDYsj9_1649936732.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 32,
                service_id: 6,
                title: "BATTERY 38B20L",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/ttbl7M0mUn_1649770412.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 33,
                service_id: 6,
                title: "BATTERY DIN 50",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/YuHrVIHA2h_1649770451.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 35,
                service_id: 6,
                title: "BATTERY 38B20R",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/Um3qWTIPpO_1649770473.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 37,
                service_id: 6,
                title: "BATTERY DIN 70",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/IRFAwrkeHu_1649770498.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 39,
                service_id: 6,
                title: "BATTERY N55",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/N16VWoEHYt_1649770573.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 41,
                service_id: 6,
                title: "BATTERY DIN65",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/Rc7jtA2Pey_1649770604.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 42,
                service_id: 6,
                title: "BATTERY DIN66",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/PQZSH3Yoen_1649770623.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
            ],
          },
          {
            id: 7,
            title: "Car Care Service",
            description:
              "Dirty interiors, Glittering exterior looks - Try our car care services",
            image: "service/b5Myo5DNvs_1649936758.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 44,
                service_id: 7,
                title: "Body Polish",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "2 to 3 Hours",
                image: "serviceType/RC4tndOZ2I_1649770871.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 45,
                service_id: 7,
                title: "Antirust Coating",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours",
                image: "serviceType/IxusDeyTdB_1649770923.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 46,
                service_id: 7,
                title: "Upholstery",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "4 to 6 Hours",
                image: "serviceType/fWMqjr2VEB_1649770958.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
            ],
          },
          {
            id: 8,
            title: "Tyres & Wheel Care",
            description: "Get your tyres replaced with recommended brands.",
            image: "service/WMN0wFdM9v_1649936788.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 47,
                service_id: 8,
                title: "Wheel Alignment & Balancing",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "2 to 3 Hours",
                image: "serviceType/tfHRHN2KUe_1649771075.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 48,
                service_id: 8,
                title: "Tyre Puncture Repair",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours",
                image: "serviceType/8Wr3BIIKdr_1649771115.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 49,
                service_id: 8,
                title: "Tyre Replacement",
                warranty: "Not Applicable",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours",
                image: "serviceType/y3JFeJZ79d_1649771149.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 50,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 165/80R14",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/lkMtPzPzpr_1649771186.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 51,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 145/80R12",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/5dmqVQUYWC_1649771222.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 52,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 185/65R15",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/svux1bOdGS_1649771261.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 53,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 155/65R14",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/96s5r8UrVj_1649771305.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 54,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 165/70R14",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/O3eulGYmab_1649771337.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 55,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 195/55R16",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/TSEbGCZPfU_1649771444.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 56,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 215/60R16",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/InhpUKRT4P_1649771497.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 57,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 205/60R16",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/S59kNtuI0E_1649771548.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 58,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 155/65R13",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/s5LV3tPnbc_1649771628.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 59,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 145/70R13",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/snTyxCnl0j_1649771671.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 60,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 145/80R13",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/SJHPf76nvV_1649771881.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 61,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 145/80R13",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/v0EIwdIBj5_1649771881.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 62,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 155/80R13",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/arL4GwCptz_1649771919.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 63,
                service_id: 8,
                title: "Maruti Suzuki Tyre - 185/70R14",
                warranty: "As per the warranty prescribed by the manufacturer",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/xIcHNEqVpo_1649771967.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
            ],
          },
          {
            id: 9,
            title: "Accessories",
            description:
              "Bored with old looks and make-outs - Customize your car MSIL accessories.",
            image: "service/XV3A3g46AM_1649937681.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 64,
                service_id: 9,
                title: "Body Cover",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/1MGjtgF19w_1650087728.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 65,
                service_id: 9,
                title: "Perfumes",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/MUz2eme5PN_1650087763.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 66,
                service_id: 9,
                title: "Mirrors",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/4z1tnufB2B_1650087787.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 67,
                service_id: 9,
                title: "Mats",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/Vurznr6odG_1650087813.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 68,
                service_id: 9,
                title: "Seat Cover",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/p6zSqvPe2E_1650087843.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 69,
                service_id: 9,
                title: "Steering Wheel Cover",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/QbV29Fk77x_1650087869.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 70,
                service_id: 9,
                title: "God Idols",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle conditionv",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/LNGwlNjrZm_1650087895.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 71,
                service_id: 9,
                title: "Alloy Wheels",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/gQktztNVGk_1650088031.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 72,
                service_id: 9,
                title: "Body Graphics",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/uPsNKkkejs_1650088085.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 73,
                service_id: 9,
                title: "Speaker Set",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/oZOWATKfwA_1650088260.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 74,
                service_id: 9,
                title: "Amplifier & Woofer",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/vTRTqoTDqu_1650088630.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 75,
                service_id: 9,
                title: "Microfiber Cloths",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/eNcJjZ5S3k_1650089137.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 76,
                service_id: 9,
                title: "Wheel Cover",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/xKRPk8hySK_1650089172.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 77,
                service_id: 9,
                title: "Wheel Cap",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/8iA8Ijd0oA_1650089200.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
              {
                id: 78,
                service_id: 9,
                title: "Car Care Kit",
                warranty:
                  "Within 3000 kilometers or 1Month whichever is earlier.",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "1 to 2 Hours and depends upon availability",
                image: "serviceType/ljZfvadQno_1650089271.png",
                created_at: null,
                updated_at: null,
                servicelist: [],
              },
            ],
          },
          {
            id: 10,
            title: "Body Repair",
            description:
              "Experience the craftsmanship to get the indigenous look of your car back.",
            image: "service/cxkYDiH7jT_1650254542.png",
            status: 1,
            created_at: null,
            updated_at: null,
            servicetype: [
              {
                id: 79,
                service_id: 10,
                title: "Full body painting within 7 days",
                warranty: "3 years warrant",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "7 Days",
                image: "serviceType/4uLKMi85c5_1650198973.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 197,
                    service_id: 79,
                    service: "No fading, No bubbles, no peeling",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 198,
                    service_id: 79,
                    service: "Well trained painters",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 199,
                    service_id: 79,
                    service: "5 days completions guarantee",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 200,
                    service_id: 79,
                    service:
                      '"Day 1&2- Dent Removal and Body Filler Application Day 2&3- Putty Application and Primer Surfacer Day 4- Preparation and Painting Day 5- Polishing  Day 6- Washing and Final inspection Day 7- Ready For Delivery "',
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 80,
                service_id: 10,
                title: "Drum and Calliper Painting",
                warranty: "No fading, No bubbles, no peeling",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "6-8 Hours",
                image: "serviceType/tTxC4UbCjg_1650199037.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 201,
                    service_id: 80,
                    service: "No fading, No bubbles, no peeling",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 202,
                    service_id: 80,
                    service: "Well trained painters",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 203,
                    service_id: 80,
                    service: "Putty Application and Primer Surfacer",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 204,
                    service_id: 80,
                    service: "Preparation and Painting",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 205,
                    service_id: 80,
                    service: "Polishing",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 206,
                    service_id: 80,
                    service: "Washing and Final inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 81,
                service_id: 10,
                title: "Roof Painting",
                warranty: "No fading, No bubbles, no peeling",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "6-8 Hours",
                image: "serviceType/JgGQT8fVTn_1650199074.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 207,
                    service_id: 81,
                    service: "No fading, No bubbles, no peeling",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 208,
                    service_id: 81,
                    service: "Well trained painters",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 209,
                    service_id: 81,
                    service: "Putty Application and Primer Surfacer",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 210,
                    service_id: 81,
                    service: "Preparation and Painting",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 211,
                    service_id: 81,
                    service: "Polishing",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 212,
                    service_id: 81,
                    service: "Washing and Final inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 82,
                service_id: 10,
                title: "Spoilers Painting",
                warranty: "No fading, No bubbles, no peeling",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "6-8 Hours",
                image: "serviceType/SZkbQAZcH3_1650199117.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 213,
                    service_id: 82,
                    service: "No fading, No bubbles, no peeling",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 214,
                    service_id: 82,
                    service: "Well trained painters",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 215,
                    service_id: 82,
                    service: "Preparation and Painting",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 216,
                    service_id: 82,
                    service: "Polishing",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 217,
                    service_id: 82,
                    service: "Washing and Final inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
              {
                id: 83,
                service_id: 10,
                title: "Alloy wheels Painting",
                warranty: "No fading, No bubbles, no peeling",
                service_period:
                  "As and when required as per the vehicle condition",
                duration: "6-8 Hours",
                image: "serviceType/1VqnojUWJY_1650199155.png",
                created_at: null,
                updated_at: null,
                servicelist: [
                  {
                    id: 218,
                    service_id: 83,
                    service: "No fading, No bubbles, no peeling",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 219,
                    service_id: 83,
                    service: "Well trained painters",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 220,
                    service_id: 83,
                    service: "Putty Application and Primer Surfacer",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 221,
                    service_id: 83,
                    service: "Preparation and Painting",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 222,
                    service_id: 83,
                    service: "Polishing",
                    created_at: null,
                    updated_at: null,
                  },
                  {
                    id: 223,
                    service_id: 83,
                    service: "Washing and Final inspection",
                    created_at: null,
                    updated_at: null,
                  },
                ],
              },
            ],
          },
        ],
        jt = [
          {
            id: 6,
            category_id: 2,
            title: "Maruti Suzuki Swift",
            seo_title:
              "Maruti Suzuki Swift (Metallic Magma Grey, Metallic Silky Silver, Pearl Arctic White, Pearl Metallic Lucent Orange, Pearl Metallic Midnight Blue, Solid Fire Red, Midnight Blue Pearl Arctic White, Pearl Arctic White Midnight Black, ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Swift On Road Price, Swift  Price, Swift  Bike New, Swift  BS6, Swift  Colours, Swift  New Model, Swift  Mileage, Swift  2021, Swift  Bike Price, Swift  Dealer, Best  Showroom, Shop & Ride Your , Get Best Offer On ,  in Your Wish List?, Visit  Showroom Now.",
            seo_desc:
              "Swift On Road Price, Swift  Price, Swift  Bike New, Swift  BS6, Swift  Colours, Swift  New Model, Swift  Mileage, Swift  2021, Swift  Bike Price, Swift  Dealer, Best  Showroom, Shop & Ride Your , Get Best Offer On ,  in Your Wish List?, Visit  Showroom Now.",
            position: 4,
            description:
              "Swift On Road Price, Swift  Price, Swift  Bike New, Swift  BS6, Swift  Colours, Swift  New Model, Swift  Mileage, Swift  2021, Swift  Bike Price, Swift  Dealer, Best  Showroom, Shop & Ride Your , Get Best Offer On ,  in Your Wish List?, Visit  Showroom Now.",
            image: "model_image/vMKm7BBDFR_1658569268.png",
            file: "uploads/file/1665467691.pdf",
            created_at: null,
            updated_at: null,
          },
          {
            id: 7,
            category_id: 2,
            title: "Maruti Suzuki Celerio",
            seo_title:
              "Maruti Suzuki Celerio (Speedy Blue, Solid Fire Red, Arctic White, Caffeine Brown, Glistening Grey, Silky Silver, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Celerio  On Road Price, Celerio  Price, Celerio  Bike New, Celerio  BS6, Celerio  Colours, Celerio  New Model, Celerio  Mileage, Celerio  2021, Celerio  Bike Price, Celerio  Dealer, Best  Showroom, Shop & Ride Your , Get Best Offer On ,  in Your Wish List?, Visit  Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 3,
            description: null,
            image: "model_image/RKNL2LdpmZ_1645081294.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
          {
            id: 8,
            category_id: 2,
            title: "Maruti Suzuki Dzire",
            seo_title:
              "Maruti Suzuki Dzire (Oxford Blue, Arctic White, Magma Grey, Phoenix Red, Premium Silver, Sherwood Brown, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Dzire On Road Price, Maruti Suzuki Dzire Price, Maruti Suzuki Dzire Bike New, Maruti Suzuki Dzire BS6, Maruti Suzuki Dzire Colours, Maruti Suzuki Dzire New Model, Maruti Suzuki Dzire Mileage, Maruti Suzuki Dzire 2021, Maruti Suzuki Dzire Bike Price, Maruti Suzuki Dzire Dealer, Best Dzire Showroom, Shop & Ride Your Dzire, Get Best Offer On Dzire, Dzire in Your Wish List?, Visit Dzire Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 5,
            description: null,
            image: "model_image/6Rm3xtnE6o_1645082102.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
          {
            id: 10,
            category_id: 2,
            title: "Maruti Suzuki Alto",
            seo_title:
              "Maruti Suzuki Alto (Uptown Red, Granite Grey, Mojito Green, Silky Silver, Cerulean Blue, Solid White, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Alto On Road Price, Maruti Suzuki Alto Price, Maruti Suzuki Alto Bike New, Maruti Suzuki Alto BS6, Maruti Suzuki Alto Colours, Maruti Suzuki Alto New Model, Maruti Suzuki Alto Mileage, Maruti Suzuki Alto 2021, Maruti Suzuki Alto Bike Price, Maruti Suzuki Alto Dealer, Best Alto Showroom, Shop & Ride Your Alto, Get Best Offer On Alto, Alto in Your Wish List?, Visit Alto Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 1,
            description:
              "The elegant new grille and sharp headlights bring a fresh appeal to the new Alto, while the newly designed bumper and side fender accentuate the looks",
            image: "model_image/qpW6UjUJwe_1649770787.jpg",
            file: "uploads/file/1649770787.pdf",
            created_at: null,
            updated_at: null,
          },
          {
            id: 11,
            category_id: 2,
            title: "Maruti Suzuki Ertiga",
            seo_title:
              "Maruti Suzuki Ertiga (Pearl Metallic Auburn Red, Metallic Magma Grey, Metallic Silky Silver, Pearl Arctic White, Pearl Metallic Oxford Blue, , , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Ertiga On Road Price, Maruti Suzuki Ertiga Price, Maruti Suzuki Ertiga Bike New, Maruti Suzuki Ertiga BS6, Maruti Suzuki Ertiga Colours, Maruti Suzuki Ertiga New Model, Maruti Suzuki Ertiga Mileage, Maruti Suzuki Ertiga 2021, Maruti Suzuki Ertiga Bike Price, Maruti Suzuki Ertiga Dealer, Best Ertiga Showroom, Shop & Ride Your Ertiga, Get Best Offer On Ertiga, Ertiga in Your Wish List?, Visit Ertiga Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 9,
            description: null,
            image: "model_image/Mgu9RMCHBY_1645083220.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
          {
            id: 12,
            category_id: 2,
            title: "Maruti Suzuki Spresso",
            seo_title:
              "Maruti Suzuki Spresso (Solid Fire Red, Pearl Starry Blue, Solid Sizzle Orange, Metalic Granite Grey, Metalic Silky Silver, Solid White, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Spresso On Road Price, Maruti Suzuki Spresso Price, Maruti Suzuki Spresso Bike New, Maruti Suzuki Spresso BS6, Maruti Suzuki Spresso Colours, Maruti Suzuki Spresso New Model, Maruti Suzuki Spresso Mileage, Maruti Suzuki Spresso 2021, Maruti Suzuki Spresso Bike Price, Maruti Suzuki Spresso Dealer, Best Spresso Showroom, Shop & Ride Your Spresso, Get Best Offer On Spresso, Spresso in Your Wish List?, Visit Spresso Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 2,
            description: null,
            image: "model_image/FQqhUiGIir_1645083297.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
          {
            id: 13,
            category_id: 2,
            title: "Maruti Suzuki Wagon R",
            seo_title:
              "Maruti Suzuki Wagon R (Poolside Blue, Autumn Orange, Magma Grey, Nutmeg Brown, Silky Silver, Solid White, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Wagon R On Road Price, Maruti Suzuki Wagon R Price, Maruti Suzuki Wagon R Bike New, Maruti Suzuki Wagon R BS6, Maruti Suzuki Wagon R Colours, Maruti Suzuki Wagon R New Model, Maruti Suzuki Wagon R Mileage, Maruti Suzuki Wagon R 2021, Maruti Suzuki Wagon R Bike Price, Maruti Suzuki Wagon R Dealer, Best Wagon R Showroom, Shop & Ride Your Wagon R, Get Best Offer On Wagon R, Wagon R in Your Wish List?, Visit Wagon R Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 6,
            description: null,
            image: "model_image/tdSZqpZBXB_1645096096.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
          {
            id: 14,
            category_id: 1,
            title: "Maruti Suzuki Ignis",
            seo_title:
              "Maruti Suzuki Ignis (Nexa Blue, Lucent Orange, Silky Silver, Turquoise Blue, Glistening Grey, Pearl Arctic White, Lucent Orange With Black Roof, Nexa Blue With Silver Roof, Nexa Blue With Black Roof), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: null,
            seo_tag:
              "Maruti Suzuki Ignis On Road Price, Maruti Suzuki Ignis Price, Maruti Suzuki Ignis Bike New, Maruti Suzuki Ignis BS6, Maruti Suzuki Ignis Colours, Maruti Suzuki Ignis New Model, Maruti Suzuki Ignis Mileage, Maruti Suzuki Ignis 2021, Maruti Suzuki Ignis Bike Price, Maruti Suzuki Ignis Dealer, Best Ignis Showroom, Shop & Ride Your Ignis, Get Best Offer On Ignis, Ignis in Your Wish List?, Visit Ignis Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 7,
            description:
              "Tough enough to take on the urban chaos & the busy roads, Ignis is a tough breed that doesn\u2019t bow down to the elements of the city. It swiftly moves through narrow lanes with immense ease.",
            image: "model_image/irgIFLKeHV_1658569719.jpg",
            file: "uploads/file/1658569719.pdf",
            created_at: null,
            updated_at: null,
          },
          {
            id: 15,
            category_id: 1,
            title: "Maruti Suzuki Ciaz",
            seo_title:
              " (Uptown Red, Granite Grey, Mojito Green, Silky Silver, Cerulean Blue, Solid White, , , ), On-Road Price, Specifications, Features, Mileage, Images & More From Kalyani Bajaj,  Leading Bajaj Dealers In Bengaluru With 17 Years Of Excellency.",
            starting_price: 887e3,
            seo_tag:
              "Maruti Suzuki Ciaz On Road Price, Maruti Suzuki Ciaz Price, Maruti Suzuki Ciaz Bike New, Maruti Suzuki Ciaz BS6, Maruti Suzuki Ciaz Colours, Maruti Suzuki Ciaz New Model, Maruti Suzuki Ciaz Mileage, Maruti Suzuki Ciaz 2021, Maruti Suzuki Ciaz Bike Price, Maruti Suzuki Ciaz Dealer, Best Ciaz Showroom, Shop & Ride Your Ciaz, Get Best Offer On Ciaz, Ciaz in Your Wish List?, Visit Ciaz Showroom Now.",
            seo_desc:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            position: 8,
            description:
              "Kalyani Motors was established in Bengaluru in 2006 & has created an excellent bond with Maruti Suzuki & modernized the automobile industry in India. Beside Arena & NEXA, we are the leading & preferred dealer of Maruti Suzuki Commercial Vehicles in Bangalore & has our state of art facilities at Magadi Road. We always strive to give High Quality, Personalised Service & Profile Satisfaction.",
            image: "model_image/wpO0C5M2gu_1646814123.jpg",
            file: null,
            created_at: null,
            updated_at: null,
          },
        ],
        bt = [
          { id: 1, time: "9:00 AM - 11:00PM" },
          { id: 2, time: "11:00 PM - 1:00PM" },
          { id: 3, time: "2:00PM - 4:00PM" },
          { id: 4, time: "4:00PM - 6:00PM" },
        ],
        yt = [
          { id: 1, by: "By you" },
          { id: 2, by: "By Agent" },
        ],
        mt = "https://kalyanimotorsadmin.kalyanicrm.com/storage/",
        vt = function () {
          var e = Object(d.useState)({}),
            t = o()(e, 2),
            i = t[0],
            r = t[1],
            n = Object(d.useState)(0),
            a = o()(n, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)(0),
            h = o()(c, 2),
            f = h[0],
            j = h[1];
          return (
            console.log(l),
            Object(g.jsx)(g.Fragment, {
              children: Object(g.jsxs)(p, {
                children: [
                  Object(g.jsx)(Se, {}),
                  Object(g.jsx)(_, {}),
                  Object(g.jsx)(u.default, {
                    style: {
                      marginTop: 10,
                      padding: 10,
                      backgroundColor: "#eee",
                      borderRadius: 10,
                    },
                    children: Object(g.jsxs)(m.default, {
                      style: {
                        fontSize: 14,
                        fontWeight: "600",
                        color: "dodgerblue",
                      },
                      children: [
                        "Service / ",
                        i.model,
                        i.service ? " / " + i.service : null,
                        i.servicetype ? " / " + i.servicetype : null,
                      ],
                    }),
                  }),
                  Object(g.jsxs)(y.default, {
                    showsVerticalScrollIndicator: !1,
                    style: { flex: 1 },
                    children: [
                      0 === l
                        ? Object(g.jsxs)(u.default, {
                            children: [
                              Object(g.jsx)(M, { text: "Choose Your Model" }),
                              Object(g.jsx)(A.default, {
                                data: jt,
                                numColumns: 2,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item;
                                  return Object(g.jsxs)(v.default, {
                                    style: {
                                      alignItems: "center",
                                      flex: 1,
                                      margin: 5,
                                      borderRadius: 12,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "model", t.title)
                                        )
                                      ),
                                        s(l + 1);
                                    },
                                    children: [
                                      Object(g.jsx)(D.default, {
                                        source: { uri: mt + t.image },
                                        style: {
                                          width: 150,
                                          height: 150,
                                          resizeMode: "contain",
                                        },
                                      }),
                                      Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 12,
                                          paddingBottom: 10,
                                          fontWeight: "600",
                                        },
                                        children: t.title,
                                      }),
                                    ],
                                  });
                                },
                              }),
                            ],
                          })
                        : null,
                      1 === l
                        ? Object(g.jsxs)(u.default, {
                            children: [
                              Object(g.jsx)(M, { text: "Choose Your service" }),
                              Object(g.jsx)(A.default, {
                                data: pt,
                                numColumns: 2,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item,
                                    n = e.index;
                                  return Object(g.jsxs)(v.default, {
                                    style: {
                                      alignItems: "center",
                                      flex: 1,
                                      margin: 5,
                                      borderRadius: 12,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "service", t.title)
                                        )
                                      ),
                                        s(l + 1),
                                        j(n);
                                    },
                                    children: [
                                      Object(g.jsx)(D.default, {
                                        source: { uri: mt + t.image },
                                        style: {
                                          width: 100,
                                          height: 100,
                                          resizeMode: "contain",
                                        },
                                      }),
                                      Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 12,
                                          paddingBottom: 10,
                                          fontWeight: "600",
                                        },
                                        children: t.title,
                                      }),
                                    ],
                                  });
                                },
                              }),
                            ],
                          })
                        : null,
                      2 === l
                        ? Object(g.jsxs)(u.default, {
                            children: [
                              Object(g.jsx)(M, {
                                text: "Choose Your Service Type",
                              }),
                              Object(g.jsx)(A.default, {
                                data: pt[f].servicetype,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item;
                                  return Object(g.jsxs)(v.default, {
                                    style: {
                                      margin: 5,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      borderRadius: 12,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                      flexDirection: "column",
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "servicetype", t.title)
                                        )
                                      ),
                                        s(l + 1);
                                    },
                                    children: [
                                      Object(g.jsx)(D.default, {
                                        source: { uri: mt + t.image },
                                        style: {
                                          width: 150,
                                          height: 150,
                                          resizeMode: "contain",
                                          borderRadius: 12,
                                        },
                                      }),
                                      Object(g.jsxs)(u.default, {
                                        style: {
                                          flexDirection: "column",
                                          paddingLeft: 15,
                                        },
                                        children: [
                                          Object(g.jsx)(M, {
                                            text: "Services Includes",
                                          }),
                                          Object(g.jsx)(A.default, {
                                            data: t.servicelist,
                                            keyExtractor: function (e) {
                                              return e.id;
                                            },
                                            showsVerticalScrollIndicator: !1,
                                            numColumns: 2,
                                            renderItem: function (e) {
                                              var t = e.item;
                                              return Object(g.jsxs)(u.default, {
                                                style: {
                                                  width: "50%",
                                                  flexDirection: "row",
                                                  alignSelf: "center",
                                                  justifyContent: "flex-start",
                                                },
                                                children: [
                                                  Object(g.jsx)(
                                                    O.CheckCircleIcon,
                                                    { size: 20, color: "green" }
                                                  ),
                                                  Object(g.jsx)(m.default, {
                                                    style: {
                                                      fontSize: 12,
                                                      paddingBottom: 10,
                                                      paddingLeft: 5,
                                                      fontWeight: "600",
                                                    },
                                                    children: t.service,
                                                  }),
                                                ],
                                              });
                                            },
                                          }),
                                        ],
                                      }),
                                    ],
                                  });
                                },
                              }),
                            ],
                          })
                        : null,
                      3 === l
                        ? Object(g.jsxs)(u.default, {
                            children: [
                              Object(g.jsx)(M, {
                                text: "Choose Service Timing",
                              }),
                              Object(g.jsx)(A.default, {
                                data: bt,
                                numColumns: 2,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item;
                                  e.index;
                                  return Object(g.jsx)(v.default, {
                                    style: {
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      paddingHorizontal: 15,
                                      paddingVertical: 15,
                                      flex: 1,
                                      margin: 5,
                                      borderRadius: 12,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "timingSlot", t.title)
                                        )
                                      );
                                    },
                                    children: Object(g.jsx)(m.default, {
                                      style: {
                                        fontSize: 12,
                                        fontWeight: "600",
                                      },
                                      children: t.time,
                                    }),
                                  });
                                },
                              }),
                              Object(g.jsx)(M, { text: "Vehicle Pickup" }),
                              Object(g.jsx)(A.default, {
                                data: yt,
                                numColumns: 2,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item;
                                  e.index;
                                  return Object(g.jsx)(v.default, {
                                    style: {
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                      flex: 1,
                                      margin: 5,
                                      borderRadius: 12,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "pickup", t.by)
                                        )
                                      );
                                    },
                                    children: Object(g.jsx)(m.default, {
                                      style: {
                                        fontSize: 12,
                                        fontWeight: "600",
                                      },
                                      children: t.by,
                                    }),
                                  });
                                },
                              }),
                              Object(g.jsx)(u.default, {
                                style: [
                                  "By Agent" === i.pickUp
                                    ? xt.active
                                    : xt.inActive,
                                ],
                                children: Object(g.jsx)(dt.default, {
                                  placeholderTextColor: "grey",
                                  placeholder:
                                    "Enter Avalible Timing Ex: 9:00AM - 10:00AM",
                                  style: {
                                    paddingLeft: 7,
                                    outlineStyle: "none",
                                    flex: 1,
                                    fontSize: 12,
                                    padding: 10,
                                  },
                                  editable: "By Agent" === i.pickup,
                                  onChangeText: function (e) {},
                                }),
                              }),
                              Object(g.jsx)(M, { text: "Vehicle DropBy" }),
                              Object(g.jsx)(A.default, {
                                data: yt,
                                numColumns: 2,
                                keyExtractor: function (e) {
                                  return e.id;
                                },
                                renderItem: function (e) {
                                  var t = e.item;
                                  e.index;
                                  return Object(g.jsx)(v.default, {
                                    style: {
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                      flex: 1,
                                      margin: 5,
                                      borderRadius: 12,
                                      shadowColor: "gray",
                                      shadowOpacity: 0.26,
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowRadius: 10,
                                      elevation: 3,
                                    },
                                    onPress: function () {
                                      r(
                                        gt(
                                          gt({}, i),
                                          {},
                                          it()({}, "pickup", t.by)
                                        )
                                      );
                                    },
                                    children: Object(g.jsx)(m.default, {
                                      style: {
                                        fontSize: 12,
                                        fontWeight: "600",
                                      },
                                      children: t.by,
                                    }),
                                  });
                                },
                              }),
                              Object(g.jsx)(u.default, {
                                style: [
                                  "By Agent" === i.pickUp
                                    ? xt.active
                                    : xt.inActive,
                                ],
                                children: Object(g.jsx)(dt.default, {
                                  placeholderTextColor: "grey",
                                  placeholder:
                                    "Enter Avalible Timing Ex: 9:00AM - 10:00AM",
                                  style: {
                                    paddingLeft: 7,
                                    outlineStyle: "none",
                                    flex: 1,
                                    fontSize: 12,
                                    padding: 10,
                                  },
                                  editable: "By Agent" === i.pickup,
                                  onChangeText: function (e) {},
                                }),
                              }),
                              Object(g.jsx)(v.default, {
                                style: {
                                  backgroundColor: "#EF6E0B",
                                  padding: 10,
                                  alignSelf: "center",
                                  marginVertical: 15,
                                  borderRadius: 10,
                                },
                                onPress: function () {
                                  s(l + 1);
                                },
                                children: Object(g.jsx)(m.default, {
                                  style: {
                                    textTransform: "uppercase",
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: R,
                                  },
                                  children: "Submit",
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            })
          );
        },
        xt = l.default.create({
          inActive: {
            flex: 1,
            width: "98%",
            alignSelf: "center",
            borderRadius: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderColor: "black",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            padding: 10,
            backgroundColor: "#eee",
          },
          active: {
            flex: 1,
            width: "98%",
            alignSelf: "center",
            borderRadius: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderColor: "black",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            padding: 10,
            backgroundColor: "#fff",
          },
        }),
        Ot = i(104);
      function wt(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? wt(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : wt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var _t = [
          { id: 1, mode: "Automatic" },
          { id: 2, mode: "Manual" },
        ],
        Ct = [
          { id: 1, type: "PETROL" },
          { id: 2, type: "DIESEL" },
          { id: 3, type: "CNG" },
        ],
        kt = function (e) {
          var t = e.navigation,
            i = e.route,
            r = Object(d.useState)([]),
            a = o()(r, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)([]),
            h = o()(c, 2),
            f = h[0],
            j = h[1],
            b = Object(d.useState)(!0),
            O = o()(b, 2),
            w = O[0],
            S = O[1],
            C = Object(d.useState)({}),
            z = o()(C, 2),
            R = z[0],
            B = z[1],
            I = Object(d.useState)(),
            T = o()(I, 2),
            M = T[0],
            W = T[1],
            V = Object(d.useState)(0),
            E = o()(V, 2),
            H = E[0],
            N = E[1],
            F = Object(d.useState)(0),
            Y = o()(F, 2),
            q = Y[0],
            G = Y[1],
            U = Object(d.useState)(0),
            X = o()(U, 2),
            J = X[0],
            Q = X[1],
            $ = Object(d.useState)(0),
            ee = o()($, 2),
            te = ee[0],
            ie = ee[1],
            re = Object(d.useState)(0),
            ne = o()(re, 2),
            ae = ne[0],
            oe = ne[1];
          Object(d.useEffect)(function () {
            le(i.params.id);
          }, []);
          var le = (function () {
              var e = n()(function* (e) {
                var t = yield L("/" + e);
                s(t.data), S(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            de = (function () {
              var e = n()(function* (e) {
                var t = yield K("/" + e);
                j(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            se = (function () {
              var e = n()(function* () {
                var e = {
                    type_of_enq: "Used Cars",
                    title: R.brand,
                    list: R.model,
                    detail:
                      R.transmission +
                      "-" +
                      R.fuel +
                      "-" +
                      R.sYear +
                      "-" +
                      R.eYear,
                    mobile: "1234567890",
                    email: " test@gmak.co",
                    kmdriven: R.fkms + "-" + R.tkms,
                    price: R.price.toString(),
                    enquire_at: "2023-01-01",
                    scheduled: "2023-01-01",
                  },
                  i = yield Z(e);
                console.log(i), 200 === i.status && t.navigate("thankyou");
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(g.jsx)(g.Fragment, {
            children: w
              ? Object(g.jsx)(ve, {})
              : Object(g.jsx)(y.default, {
                  showsVerticalScrollIndicator: !1,
                  style: { backgroundColor: "white" },
                  children: Object(g.jsxs)(p, {
                    children: [
                      Object(g.jsx)(Se, {}),
                      Object(g.jsx)(_, { navigation: t }),
                      Object(g.jsxs)(v.default, {
                        onPress: function () {
                          W(1);
                        },
                        style: {
                          flexDirection: "row",
                          borderBottomWidth: 1,
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: 10,
                          paddingVertical: 5,
                        },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                            },
                            children: [
                              Object(g.jsx)(x.BookmarkIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: R.brand ? R.brand : "Make",
                              }),
                            ],
                          }),
                          Object(g.jsx)(x.ChevronRightIcon, {
                            size: 22,
                            color: "#0D4C92",
                          }),
                        ],
                      }),
                      Object(g.jsx)(Ue.BottomSheet, {
                        onBackButtonPress: function () {
                          W(null);
                        },
                        onBackdropPress: function () {
                          W(null);
                        },
                        visible: 1 === M,
                        children: Object(g.jsxs)(u.default, {
                          style: { backgroundColor: "#fff", height: 200 },
                          children: [
                            Object(g.jsx)(u.default, {
                              style: {
                                shadowColor: "gray",
                                textAlign: "center",
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 1 },
                                shadowRadius: 5,
                                elevation: 1,
                                marginBottom: 5,
                                width: "100%",
                              },
                              children: Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 20,
                                  fontWeight: "600",
                                  padding: 7,
                                },
                                children: "Please Choose the Brand",
                              }),
                            }),
                            Object(g.jsx)(A.default, {
                              showsVerticalScrollIndicator: !1,
                              horizontal: !0,
                              data: l,
                              renderItem: function (e) {
                                var t = e.item;
                                e.index;
                                return Object(g.jsxs)(v.default, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    flex: 1,
                                    margin: 5,
                                    borderRadius: 12,
                                    shadowColor: "gray",
                                    shadowOpacity: 0.26,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 10,
                                    elevation: 3,
                                  },
                                  onPress: function () {
                                    W(null),
                                      B(
                                        St(
                                          St({}, R),
                                          {},
                                          it()({}, "brand", t.title)
                                        )
                                      ),
                                      de(t.id);
                                  },
                                  children: [
                                    Object(g.jsx)(D.default, {
                                      style: {
                                        height: 60,
                                        width: 60,
                                        resizeMode: "contain",
                                      },
                                      source: "",
                                    }),
                                    Object(g.jsx)(m.default, {
                                      children: t.title,
                                    }),
                                  ],
                                });
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(g.jsxs)(v.default, {
                        onPress: function () {
                          W(2);
                        },
                        style: {
                          flexDirection: "row",
                          borderBottomWidth: 1,
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: 10,
                          paddingVertical: 5,
                        },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                            },
                            children: [
                              Object(g.jsx)(x.Squares2X2Icon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: R.model ? R.model : "Model",
                              }),
                            ],
                          }),
                          Object(g.jsx)(x.ChevronRightIcon, {
                            size: 22,
                            color: "#0D4C92",
                          }),
                        ],
                      }),
                      Object(g.jsx)(Ue.BottomSheet, {
                        onBackButtonPress: function () {
                          W(null);
                        },
                        onBackdropPress: function () {
                          W(null);
                        },
                        visible: 2 === M,
                        children: Object(g.jsxs)(u.default, {
                          style: { backgroundColor: "#fff", height: 200 },
                          children: [
                            Object(g.jsx)(u.default, {
                              style: {
                                shadowColor: "gray",
                                textAlign: "center",
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 1 },
                                shadowRadius: 5,
                                elevation: 1,
                                marginBottom: 5,
                                width: "100%",
                              },
                              children: Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 20,
                                  fontWeight: "600",
                                  padding: 7,
                                },
                                children: R.brand
                                  ? "Please Choose the Model"
                                  : "Please Select Brand First",
                              }),
                            }),
                            Object(g.jsx)(A.default, {
                              showsVerticalScrollIndicator: !1,
                              horizontal: !0,
                              data: f,
                              renderItem: function (e) {
                                var t = e.item;
                                e.index;
                                return Object(g.jsxs)(v.default, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    flex: 1,
                                    margin: 5,
                                    borderRadius: 12,
                                    shadowColor: "gray",
                                    shadowOpacity: 0.26,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 10,
                                    elevation: 3,
                                  },
                                  onPress: function () {
                                    W(null),
                                      B(
                                        St(
                                          St({}, R),
                                          {},
                                          it()({}, "model", t.title)
                                        )
                                      );
                                  },
                                  children: [
                                    Object(g.jsx)(D.default, {
                                      style: {
                                        height: 60,
                                        width: 60,
                                        resizeMode: "contain",
                                      },
                                      source: "",
                                    }),
                                    Object(g.jsx)(m.default, {
                                      children: t.title,
                                    }),
                                  ],
                                });
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(g.jsxs)(v.default, {
                        onPress: function () {
                          W(3);
                        },
                        style: {
                          flexDirection: "row",
                          borderBottomWidth: 1,
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: 10,
                          paddingVertical: 5,
                        },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                            },
                            children: [
                              Object(g.jsx)(x.TruckIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: R.transmission
                                  ? R.transmission
                                  : "Transmission",
                              }),
                            ],
                          }),
                          Object(g.jsx)(x.ChevronRightIcon, {
                            size: 22,
                            color: "#0D4C92",
                          }),
                        ],
                      }),
                      Object(g.jsx)(Ue.BottomSheet, {
                        onBackButtonPress: function () {
                          W(null);
                        },
                        onBackdropPress: function () {
                          W(null);
                        },
                        visible: 3 === M,
                        children: Object(g.jsxs)(u.default, {
                          style: { backgroundColor: "#fff", height: 200 },
                          children: [
                            Object(g.jsx)(u.default, {
                              style: {
                                shadowColor: "gray",
                                alignItems: "center",
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 1 },
                                shadowRadius: 5,
                                elevation: 1,
                                marginBottom: 5,
                                width: "100%",
                              },
                              children: Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 20,
                                  fontWeight: "600",
                                  padding: 7,
                                },
                                children: "Please Select Transamission Mode",
                              }),
                            }),
                            Object(g.jsx)(A.default, {
                              showsVerticalScrollIndicator: !1,
                              horizontal: !0,
                              data: _t,
                              renderItem: function (e) {
                                var t = e.item;
                                e.index;
                                return Object(g.jsx)(v.default, {
                                  style: {
                                    height: 60,
                                    width: 100,
                                    paddingHorizontal: 10,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flex: 1,
                                    margin: 5,
                                    borderRadius: 12,
                                    shadowColor: "gray",
                                    shadowOpacity: 0.26,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 10,
                                    elevation: 3,
                                  },
                                  onPress: function () {
                                    W(null),
                                      B(
                                        St(
                                          St({}, R),
                                          {},
                                          it()({}, "transmission", t.mode)
                                        )
                                      );
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 16,
                                      paddingVertical: 15,
                                      fontWeight: "600",
                                    },
                                    children: t.mode,
                                  }),
                                });
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(g.jsxs)(v.default, {
                        onPress: function () {
                          W(4);
                        },
                        style: {
                          flexDirection: "row",
                          borderBottomWidth: 1,
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: 10,
                          paddingVertical: 5,
                        },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                            },
                            children: [
                              Object(g.jsx)(x.FunnelIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: R.fuel ? R.fuel : "Fuel",
                              }),
                            ],
                          }),
                          Object(g.jsx)(x.ChevronRightIcon, {
                            size: 22,
                            color: "#0D4C92",
                          }),
                        ],
                      }),
                      Object(g.jsx)(Ue.BottomSheet, {
                        onBackButtonPress: function () {
                          W(null);
                        },
                        onBackdropPress: function () {
                          W(null);
                        },
                        visible: 4 === M,
                        children: Object(g.jsxs)(u.default, {
                          style: { backgroundColor: "#fff", height: 200 },
                          children: [
                            Object(g.jsx)(u.default, {
                              style: {
                                shadowColor: "gray",
                                alignItems: "center",
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 1 },
                                shadowRadius: 5,
                                elevation: 1,
                                marginBottom: 5,
                                width: "100%",
                              },
                              children: Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 20,
                                  fontWeight: "600",
                                  padding: 7,
                                },
                                children: "Please Select fuel Type",
                              }),
                            }),
                            Object(g.jsx)(A.default, {
                              showsVerticalScrollIndicator: !1,
                              horizontal: !0,
                              data: Ct,
                              renderItem: function (e) {
                                var t = e.item;
                                e.index;
                                return Object(g.jsx)(v.default, {
                                  style: {
                                    height: 60,
                                    width: 100,
                                    paddingHorizontal: 10,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flex: 1,
                                    margin: 5,
                                    borderRadius: 12,
                                    shadowColor: "gray",
                                    shadowOpacity: 0.26,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 10,
                                    elevation: 3,
                                  },
                                  onPress: function () {
                                    W(null),
                                      B(
                                        St(
                                          St({}, R),
                                          {},
                                          it()({}, "fuel", t.type)
                                        )
                                      );
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      fontSize: 16,
                                      paddingVertical: 15,
                                      fontWeight: "600",
                                    },
                                    children: t.type,
                                  }),
                                });
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(g.jsxs)(u.default, {
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              marginHorizontal: 10,
                            },
                            children: [
                              Object(g.jsx)(x.CalendarDaysIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: "Year Model",
                              }),
                            ],
                          }),
                          Object(g.jsx)(Ot.default, {
                            min: 2e3,
                            max: 2022,
                            fromValueOnChange: function (e) {
                              B(St(St({}, R), {}, it()({}, "sYear", e))), N(e);
                            },
                            toValueOnChange: function (e) {
                              B(St(St({}, R), {}, it()({}, "eYear", e))), G(e);
                            },
                            outOfRangeBarColor: "#0D4C92",
                            showValueLabels: !1,
                            styleSize: "small",
                            inRangeBarColor: "#c8c8c8",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              textAlign: "center",
                              color: k,
                              fontWeight: "500",
                              fontSize: 10,
                            },
                            children: "KMs Driven Between",
                          }),
                          Object(g.jsxs)(m.default, {
                            style: {
                              textAlign: "center",
                              color: P,
                              fontWeight: "700",
                              fontSize: 14,
                            },
                            children: [H, " Year - ", q, " Year"],
                          }),
                        ],
                      }),
                      Object(g.jsx)(u.default, {
                        style: {
                          height: 1,
                          width: "85%",
                          backgroundColor: "gray",
                          alignSelf: "center",
                          marginVertical: 8,
                        },
                      }),
                      Object(g.jsxs)(u.default, {
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              marginHorizontal: 10,
                            },
                            children: [
                              Object(g.jsx)(x.CalendarDaysIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: "KMs Driven",
                              }),
                            ],
                          }),
                          Object(g.jsx)(Ot.default, {
                            min: 0,
                            max: 2e4,
                            fromValueOnChange: function (e) {
                              B(St(St({}, R), {}, it()({}, "fkms", e))), Q(e);
                            },
                            toValueOnChange: function (e) {
                              B(St(St({}, R), {}, it()({}, "tkms", e))), ie(e);
                            },
                            outOfRangeBarColor: "#0D4C92",
                            showValueLabels: !1,
                            styleSize: "small",
                            inRangeBarColor: "#c8c8c8",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              textAlign: "center",
                              color: k,
                              fontWeight: "500",
                              fontSize: 10,
                            },
                            children: "KMs Driven Between",
                          }),
                          Object(g.jsxs)(m.default, {
                            style: {
                              textAlign: "center",
                              color: P,
                              fontWeight: "700",
                              fontSize: 14,
                            },
                            children: [J, " KM - ", te, " KM"],
                          }),
                        ],
                      }),
                      Object(g.jsx)(u.default, {
                        style: {
                          height: 1,
                          width: "85%",
                          backgroundColor: "gray",
                          alignSelf: "center",
                          marginVertical: 8,
                        },
                      }),
                      Object(g.jsxs)(u.default, {
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              marginHorizontal: 10,
                            },
                            children: [
                              Object(g.jsx)(x.CurrencyRupeeIcon, {
                                size: 22,
                                color: "#0D4C92",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  color: "black",
                                  marginLeft: 8,
                                  fontSize: 16,
                                  fontWeight: "600",
                                },
                                children: "Wanted Price",
                              }),
                            ],
                          }),
                          Object(g.jsx)(Ot.Slider, {
                            min: 0,
                            max: 1e6,
                            valueOnChange: function (e) {
                              B(St(St({}, R), {}, it()({}, "price", e))), oe(e);
                            },
                            outOfRangeBarColor: "#0D4C92",
                            showValueLabels: !1,
                            styleSize: "small",
                            inRangeBarColor: "#c8c8c8",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              textAlign: "center",
                              color: k,
                              fontWeight: "500",
                              fontSize: 10,
                            },
                            children: "Price Under",
                          }),
                          Object(g.jsxs)(m.default, {
                            style: {
                              textAlign: "center",
                              color: P,
                              fontWeight: "700",
                              fontSize: 14,
                            },
                            children: ["\u20b9 ", ae, " /-"],
                          }),
                        ],
                      }),
                      Object(g.jsx)(v.default, {
                        style: {
                          alignItems: "center",
                          justifyContent: "center",
                          paddingVertical: 10,
                          width: "80%",
                          borderRadius: 12,
                          alignSelf: "center",
                          marginTop: 10,
                          backgroundColor: "#0D4C92",
                        },
                        onPress: se,
                        children: Object(g.jsx)(m.default, {
                          style: {
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#fff",
                          },
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
                }),
          });
        };
      l.default.create({});
      function zt(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zt(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : zt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var Bt = [
          { id: 1, year: "2012" },
          { id: 2, year: "2013" },
          { id: 3, year: "2014" },
          { id: 4, year: "2015" },
          { id: 5, year: "2016" },
          { id: 6, year: "2017" },
          { id: 7, year: "2018" },
          { id: 8, year: "2019" },
          { id: 9, year: "2020" },
          { id: 10, year: "2021" },
          { id: 11, year: "2022" },
        ],
        It = function (e) {
          var t = e.navigation,
            i = e.route,
            r = Object(d.useState)([]),
            a = o()(r, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)(!0),
            h = o()(c, 2),
            f = h[0],
            p = h[1],
            j = Object(d.useState)({ barnd: i.params.data.brand }),
            b = o()(j, 2),
            x = b[0],
            O = b[1],
            w = Object(d.useState)(0),
            S = o()(w, 2),
            C = S[0],
            z = S[1],
            B = Object(d.useState)(0),
            I = o()(B, 2),
            W = I[0],
            D = I[1],
            V = Object(d.useState)(0),
            E = o()(V, 2),
            H = E[0],
            N = E[1];
          console.log(l),
            Object(d.useEffect)(function () {
              F(i.params.data.id);
            }, []);
          var F = (function () {
            var e = n()(function* (e) {
              var t = yield K("/" + e);
              s(t.data), p(!1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(g.jsx)(g.Fragment, {
            children: f
              ? Object(g.jsx)(ve, {})
              : Object(g.jsxs)(y.default, {
                  showsVerticalScrollIndicator: !1,
                  style: { backgroundColor: "#fff" },
                  children: [
                    Object(g.jsxs)(u.default, {
                      children: [
                        Object(g.jsx)(Se, {}),
                        Object(g.jsxs)(g.Fragment, {
                          children: [
                            Object(g.jsx)(_, { navigation: t }),
                            Object(g.jsx)(M, { text: "Select Your Brand" }),
                            Object(g.jsx)(A.default, {
                              data: l,
                              numColumns: 3,
                              renderItem: function (e) {
                                var i = e.item;
                                e.index;
                                return Object(g.jsx)(v.default, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flex: 1,
                                    margin: 5,
                                    borderRadius: 12,
                                    shadowColor: "gray",
                                    shadowOpacity: 0.26,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 10,
                                    elevation: 3,
                                  },
                                  onPress: function () {
                                    t.navigate("");
                                  },
                                  children: Object(g.jsx)(m.default, {
                                    style: {
                                      padding: 5,
                                      fontSize: 12,
                                      textAlign: "center",
                                      fontWeight: "600",
                                      color: k,
                                    },
                                    children: i.title,
                                  }),
                                });
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(g.jsx)(M, { text: "Select Model Year" }),
                    Object(g.jsx)(A.default, {
                      data: Bt,
                      keyExtractor: function (e) {
                        return e.id.toString();
                      },
                      numColumns: 3,
                      renderItem: function (e) {
                        var t = e.item;
                        return Object(g.jsx)(v.default, {
                          style: {
                            alignItems: "center",
                            justifyContent: "space-between",
                            flex: 1,
                            margin: 5,
                            borderRadius: 12,
                            shadowColor: "gray",
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 10,
                            elevation: 3,
                          },
                          onPress: function () {
                            O(Rt(Rt({}, x), {}, it()({}, "year", t.year)));
                          },
                          children: Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 16,
                              paddingVertical: 15,
                              fontWeight: "600",
                            },
                            children: t.year,
                          }),
                        });
                      },
                    }),
                    Object(g.jsxs)(u.default, {
                      children: [
                        Object(g.jsx)(M, { text: "KMs Driven" }),
                        Object(g.jsx)(Ot.default, {
                          min: 0,
                          max: 2e4,
                          fromValueOnChange: function (e) {
                            O(Rt(Rt({}, x), {}, it()({}, "fkms", e))), z(e);
                          },
                          toValueOnChange: function (e) {
                            O(Rt(Rt({}, x), {}, it()({}, "tkms", e))), D(e);
                          },
                          outOfRangeBarColor: "#c8c8c8",
                          showValueLabels: !1,
                          styleSize: "small",
                          inRangeBarColor: "#0D4C92",
                        }),
                        Object(g.jsx)(m.default, {
                          style: {
                            textAlign: "center",
                            color: k,
                            fontWeight: "500",
                          },
                          children: "KMs Driven Between",
                        }),
                        Object(g.jsxs)(m.default, {
                          style: {
                            textAlign: "center",
                            color: P,
                            fontWeight: "700",
                            fontSize: 18,
                          },
                          children: [C, " KM - ", W, " KM"],
                        }),
                      ],
                    }),
                    Object(g.jsxs)(u.default, {
                      children: [
                        Object(g.jsx)(M, { text: "Price Value" }),
                        Object(g.jsx)(Ot.Slider, {
                          min: 0,
                          max: 1e6,
                          valueOnChange: function (e) {
                            O(Rt(Rt({}, x), {}, it()({}, "price", e))), N(e);
                          },
                          outOfRangeBarColor: "#c8c8c8",
                          showValueLabels: !1,
                          styleSize: "small",
                          inRangeBarColor: "#0D4C92",
                        }),
                        Object(g.jsx)(m.default, {
                          style: {
                            textAlign: "center",
                            color: k,
                            fontWeight: "500",
                          },
                          children: "Price Under",
                        }),
                        Object(g.jsxs)(m.default, {
                          style: {
                            textAlign: "center",
                            color: P,
                            fontWeight: "700",
                            fontSize: 18,
                          },
                          children: ["\u20b9 ", H, " /-"],
                        }),
                      ],
                    }),
                    Object(g.jsx)(v.default, {
                      style: {
                        backgroundColor: T,
                        padding: 5,
                        borderRadius: 8,
                        alignSelf: "flex-end",
                        margin: 10,
                        width: 90,
                      },
                      children: Object(g.jsx)(m.default, {
                        style: {
                          color: R,
                          fontSize: 17,
                          fontWeight: "700",
                          textAlign: "center",
                        },
                        children: "LogIn",
                      }),
                    }),
                  ],
                }),
          });
        },
        Pt =
          (l.default.create({}),
          function () {
            return Object(g.jsx)(u.default, {
              children: Object(g.jsx)(m.default, { children: "UsedCarForm" }),
            });
          });
      l.default.create({});
      function Tt(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tt(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Tt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var Wt = function () {
          return Object(g.jsxs)(u.default, {
            style: { backgroundColor: "white", flex: 1, position: "relative" },
            children: [
              Object(g.jsxs)(u.default, {
                style: {
                  backgroundColor: "#506BE6",
                  paddingBottom: 10,
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                },
                children: [
                  Object(g.jsx)(u.default, {
                    style: {
                      alignSelf: "flex-end",
                      padding: 10,
                      paddingRight: 15,
                    },
                    children: Object(g.jsx)(v.default, {
                      style: {
                        padding: 5,
                        borderRadius: 5,
                        width: 90,
                        color: "blue",
                        backgroundColor: "#F2F3F4",
                      },
                      children: Object(g.jsx)(m.default, {
                        style: {
                          color: "blue",
                          fontSize: 10,
                          fontWeight: "700",
                          paddingVertical: 3,
                          paddingHorizontal: 10,
                        },
                        children: "Edit Profile",
                      }),
                    }),
                  }),
                  Object(g.jsxs)(u.default, {
                    style: {
                      alignSelf: "center",
                      alignContent: "center",
                      position: "relative",
                      marginTop: 4,
                    },
                    children: [
                      Object(g.jsx)(O.PencilIcon, {
                        size: 20,
                        color: "grey",
                        style: {
                          position: "absolute",
                          top: "5%",
                          left: "75%",
                          zIndex: 13,
                          cursor: "pointer",
                          backgroundColor: "lightgrey",
                          padding: 6,
                          borderRadius: 15,
                        },
                      }),
                      Object(g.jsx)(D.default, {
                        source: {
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
                        },
                        style: {
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          alignSelf: "center",
                          marginBottom: 30,
                        },
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsxs)(u.default, {
                style: { padding: 20 },
                children: [
                  Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsx)(m.default, {
                        style: At.inputlabel,
                        children: "Your Name",
                      }),
                      Object(g.jsx)(dt.default, {
                        style: At.textinput,
                        placeholder: "Enter Your Name",
                        value: "JAYASIMHA M H",
                      }),
                    ],
                  }),
                  Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsx)(m.default, {
                        style: Mt(Mt({}, At.inputlabel), {}, { marginTop: 15 }),
                        children: "Your Email",
                      }),
                      Object(g.jsx)(dt.default, {
                        style: At.textinput,
                        placeholder: "Enter Your Email",
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsx)(v.default, {
                style: {
                  backgroundColor: "rgb(80, 107, 230)",
                  height: 35,
                  padding: 5,
                  marginTop: 20,
                  alignItems: "center",
                  width: "100%",
                  alignSelf: "center",
                  borderRadius: 5,
                  position: "absolute",
                  bottom: 20,
                },
                children: Object(g.jsx)(m.default, {
                  style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                  children: "Save",
                }),
              }),
            ],
          });
        },
        At = l.default.create({
          inputlabel: { fontSize: 14, color: "grey", marginBottom: 10 },
          textinput: {
            padding: 10,
            shadowColor: "#171717",
            shadowOffset: { width: -1, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            borderRadius: 5,
            fontWeight: "600",
            outlineStyle: "none",
          },
        }),
        Dt = function (e) {
          var t = e.navigation,
            r = Object(d.useState)([]),
            a = o()(r, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)([]),
            h = o()(c, 2),
            f = h[0],
            p = h[1],
            j = Object(d.useState)({}),
            b = o()(j, 2),
            y = b[0],
            S = b[1];
          console.log(y.profile_id),
            Object(d.useEffect)(function () {
              _(), console.log(t);
            }, []);
          var _ = (function () {
              var e = n()(function* () {
                try {
                  var e = yield w.default.getItem("userCredential");
                  if (null !== e) {
                    var t = JSON.parse(e);
                    console.log(t), S(t);
                  }
                } catch (i) {
                  console.log(i);
                }
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            C = (function () {
              var e = n()(function* (e) {
                if ((s([]), e.length >= 4)) {
                  var t = { profile_id: 2, keyword: e };
                  p(e);
                  var i = yield le(t);
                  console.log(i), console.log(), s(i.data.items);
                } else p(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(g.jsxs)(u.default, {
            style: { backgroundColor: "#fff", flex: 1 },
            children: [
              Object(g.jsxs)(u.default, {
                style: {
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                },
                children: [
                  Object(g.jsx)(v.default, {
                    onPress: function () {
                      void 0 != t.goBack() ? t.goBack() : t.navigate("main");
                    },
                    style: { flexDirection: "row", alignItems: "center" },
                    children: Object(g.jsx)(x.ArrowLeftIcon, {
                      size: 20,
                      color: "red",
                      style: { marginHorizontal: 10 },
                    }),
                  }),
                  Object(g.jsxs)(u.default, {
                    style: {
                      width: "85%",
                      alignSelf: "center",
                      borderRadius: 16,
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderColor: "black",
                      shadowColor: "gray",
                      shadowOpacity: 0.26,
                      shadowOffset: { width: 0, height: 2 },
                      shadowRadius: 10,
                      elevation: 3,
                      padding: 10,
                    },
                    children: [
                      Object(g.jsx)(x.MagnifyingGlassIcon, {
                        size: 25,
                        color: "#0D4C92",
                      }),
                      Object(g.jsx)(dt.default, {
                        placeholderTextColor: "grey",
                        placeholder: 'Search  "Your Car"',
                        style: {
                          paddingLeft: 7,
                          outlineStyle: "none",
                          flex: 1,
                        },
                        onChangeText: function (e) {
                          C(e);
                        },
                        value: f,
                      }),
                      Object(g.jsxs)(u.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 30,
                              borderWidth: 0.2,
                              borderColor: "black",
                              marginHorizontal: 10,
                            },
                          }),
                          Object(g.jsx)(O.MicrophoneIcon, {
                            size: 20,
                            color: "#0D4C92",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.length
                ? Object(g.jsx)(u.default, {
                    style: { flex: 1 },
                    children: Object(g.jsx)(A.default, {
                      data: l,
                      showsVerticalScrollIndicator: !1,
                      keyExtractor: function (e, t) {
                        return t;
                      },
                      renderItem: function (e) {
                        var r = e.item;
                        return Object(g.jsxs)(v.default, {
                          style: {
                            flex: 1,
                            width: "95%",
                            marginVertical: 8,
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            flexDirection: "row",
                            backgroundColor: R,
                            marginHorizontal: 8,
                          },
                          onPress: function () {
                            t.navigate(r.page_navigation, {
                              var_id: r.id,
                              item_id: r.itemlist,
                            });
                          },
                          children: [
                            Object(g.jsx)(u.default, {
                              style: {
                                width: 50,
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingHorizontal: 10,
                                borderRadius: "50%",
                                position: "relative",
                                shadowColor: "grey",
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 2 },
                                shadowRadius: 12,
                                elevation: 3,
                              },
                              children: Object(g.jsx)(D.default, {
                                source:
                                  null === r.images ? i(502) : r.images[0],
                                style: {
                                  width: 50,
                                  height: 50,
                                  borderRadius: "50%",
                                  resizeMode: "contain",
                                },
                              }),
                            }),
                            Object(g.jsxs)(u.default, {
                              style: { width: "80%" },
                              children: [
                                Object(g.jsx)(m.default, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 15,
                                    fontWeight: "600",
                                    paddingLeft: 10,
                                  },
                                  children: r.subtitle,
                                }),
                                Object(g.jsx)(m.default, {
                                  numberOfLines: 2,
                                  style: {
                                    textAlign: "justify",
                                    paddingLeft: 10,
                                    color: k,
                                    fontSize: 10,
                                  },
                                  children: r.description.slice(0.2),
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    }),
                  })
                : Object(g.jsxs)(u.default, {
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                    },
                    children: [
                      Object(g.jsx)(D.default, {
                        source: i(503),
                        style: { width: 150, height: 150 },
                      }),
                      Object(g.jsx)(m.default, {
                        children: "not yet searched",
                      }),
                    ],
                  }),
            ],
          });
        },
        Vt = (l.default.create({}), i(152)),
        Et = i(98),
        Ht = function (e) {
          return Object(g.jsx)(u.default, {
            style: Nt.centeredView,
            children: Object(g.jsx)(Ge.default, {
              animationType: "slide",
              transparent: !0,
              visible: e.modalVisible,
              onRequestClose: function () {
                Et.default.alert("Modal has been closed."),
                  setModalVisible(!modalVisible);
              },
              children: Object(g.jsx)(u.default, {
                style: Nt.centeredView,
                children: Object(g.jsxs)(u.default, {
                  style: Nt.modalView,
                  children: [
                    Object(g.jsx)(m.default, {
                      style: Nt.modalText,
                      children: e.msg,
                    }),
                    Object(g.jsx)(u.default, {
                      style: { justifyContent: "end" },
                      children: Object(g.jsx)(v.default, {
                        style: {
                          backgroundColor: "#0D4C92",
                          color: "white",
                          paddingHorizontal: 15,
                          paddingVertical: 8,
                          marginVertical: 15,
                          borderRadius: 6,
                        },
                        onPress: function () {
                          return e.setModalVisible(!1);
                        },
                        children: Object(g.jsx)(m.default, {
                          style: { color: "white" },
                          children: "Got it",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Nt = l.default.create({
          centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
          button: { borderRadius: 20, padding: 10, elevation: 2 },
          buttonOpen: { backgroundColor: "#F194FF" },
          buttonClose: { backgroundColor: "#2196F3" },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          },
          modalText: { marginBottom: 15, textAlign: "center" },
        }),
        Ft = i(208);
      function Lt(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function Yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Lt(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Lt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var qt = function (e) {
          var t = e.navigation,
            i = e.route,
            r = Object(d.useState)(!1),
            a = o()(r, 2),
            l = a[0],
            s = a[1],
            c = Object(d.useState)(!1),
            h = o()(c, 2),
            f = h[0],
            p = h[1],
            j = Object(d.useState)(1),
            b = o()(j, 2),
            x = b[0],
            w = b[1],
            S = Object(d.useState)([]),
            _ = o()(S, 2),
            C = _[0],
            k = _[1],
            z = Object(d.useState)(""),
            R = o()(z, 2),
            B = R[0],
            I = R[1],
            P = Object(d.useState)({
              username: "",
              email: "",
              city: "",
              outlet: "",
              address1: "",
              address2: "",
              pincode: "",
              model: "Maruti Suzuki Swift",
              varient: "Maruti Suzuki Swift LXI 1.2L 5MT",
              color: "Solid Fire Red",
              mob_no: "9834542536",
            }),
            T = o()(P, 2),
            M = T[0],
            W = T[1];
          console.log(C),
            Object(d.useEffect)(function () {
              A(i.params.var_id);
            }, []);
          var A = (function () {
              var e = n()(function* (e) {
                var t = yield Y("/" + e);
                k(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            V = function () {
              0 == M.username.length
                ? (I("please enter Your username"), s(!0))
                : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\./i.test(M.email)
                ? (console.log("hello"), w(2))
                : (I("Please Enter Valid Email"), s(!0));
            };
          return Object(g.jsxs)(y.default, {
            style: { padding: 15, backgroundColor: "white" },
            children: [
              Object(g.jsx)(u.default, {
                children: Object(g.jsx)(m.default, {
                  style: {
                    textAlign: "center",
                    fontSize: 26,
                    fontWeight: "700",
                    paddingVertical: 25,
                  },
                  children: "E-BOOKING",
                }),
              }),
              Object(g.jsxs)(u.default, {
                style: {
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginBottom: 15,
                },
                children: [
                  Object(g.jsx)(v.default, {
                    style:
                      1 === x
                        ? Yt(
                            Yt({}, Gt.buttonlayout),
                            {},
                            it()({}, "backgroundColor", "#0D4C92")
                          )
                        : Gt.buttonlayout,
                    onPress: function () {
                      w(1);
                    },
                    children: Object(g.jsx)(m.default, {
                      style: { fontSize: 14, fontWeight: "700", color: "#fff" },
                      children: "STEP 1",
                    }),
                  }),
                  Object(g.jsx)(v.default, {
                    style:
                      2 === x
                        ? Yt(
                            Yt({}, Gt.buttonlayout),
                            {},
                            it()({}, "backgroundColor", "#0D4C92")
                          )
                        : Gt.buttonlayout,
                    onPress: function () {
                      V();
                    },
                    children: Object(g.jsx)(m.default, {
                      style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                      children: "STEP 2",
                    }),
                  }),
                  Object(g.jsx)(v.default, {
                    style:
                      3 === x
                        ? Yt(
                            Yt({}, Gt.buttonlayout),
                            {},
                            it()({}, "backgroundColor", "#0D4C92")
                          )
                        : Gt.buttonlayout,
                    onPress: function () {},
                    children: Object(g.jsx)(m.default, {
                      style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                      children: "STEP 3",
                    }),
                  }),
                ],
              }),
              Object(g.jsx)(Ht, {
                modalVisible: l,
                setModalVisible: s,
                msg: B,
              }),
              1 === x
                ? Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          alignSelf: "flex-start",
                          marginVertical: 15,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              backgroundColor: "#0D4C92",
                              width: 30,
                              height: 30,
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 14,
                            },
                            children: Object(g.jsx)(m.default, {
                              style: { color: "white" },
                              children: "1",
                            }),
                          }),
                          Object(g.jsx)(m.default, {
                            style: { fontWeight: "600" },
                            children: "PERSONAL DETAILS",
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: { paddingHorizontal: 20 },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: { marginVertical: 10 },
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Type Your Name*",
                              }),
                              Object(g.jsx)(dt.default, {
                                value: M.username,
                                placeholder: "Name*",
                                placeholderTextColor: "#8c8c8c",
                                onChangeText: function (e) {
                                  W(Yt(Yt({}, M), {}, it()({}, "username", e)));
                                },
                                style: {
                                  color: "black",
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                              }),
                            ],
                          }),
                          Object(g.jsxs)(u.default, {
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Type Your Email*",
                              }),
                              Object(g.jsx)(dt.default, {
                                value: M.email,
                                placeholder: "Email*",
                                onChangeText: function (e) {
                                  W(Yt(Yt({}, M), {}, it()({}, "email", e)));
                                },
                                placeholderTextColor: "#8c8c8c",
                                style: {
                                  color: "black",
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                              }),
                            ],
                          }),
                          Object(g.jsx)(u.default, {
                            children: Object(g.jsx)(dt.default, {
                              value: "",
                              placeholder: "Mobile*",
                              placeholderTextColor: "#8c8c8c",
                              style: {
                                color: "black",
                                borderBottomColor: "grey",
                                borderBottomWidth: 2,
                                padding: 6,
                                outlineStyle: "none",
                                marginTop: 25,
                              },
                            }),
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 10,
                              marginVertical: 5,
                              color: "grey",
                            },
                            children: "The fields marked as * are mandatory",
                          }),
                          Object(g.jsx)(u.default, {
                            style: { justifyContent: "end", width: "100%" },
                            children: Object(g.jsx)(v.default, {
                              style: {
                                backgroundColor: "#0D4C92",
                                color: "white",
                                width: 170,
                                paddingHorizontal: 15,
                                paddingVertical: 8,
                                marginVertical: 15,
                                borderRadius: 6,
                              },
                              onPress: V,
                              children: Object(g.jsx)(m.default, {
                                style: { color: "white" },
                                children: "Save & Continue",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(g.jsx)(u.default, {}),
              2 === x
                ? Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsx)(u.default, {
                        children: Object(g.jsx)(D.default, {
                          style: {
                            width: "100%",
                            height: 300,
                            resizeMode: "contain",
                          },
                          source: { uri: C[0].images[0] },
                        }),
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          alignSelf: "flex-start",
                          marginVertical: 15,
                        },
                        children: [
                          Object(g.jsx)(u.default, {
                            style: {
                              backgroundColor: "#0D4C92",
                              width: 30,
                              height: 30,
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 14,
                            },
                            children: Object(g.jsx)(m.default, {
                              style: { color: "white" },
                              children: "1",
                            }),
                          }),
                          Object(g.jsx)(m.default, {
                            style: { fontWeight: "600" },
                            children: "CAR DETAILS",
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: { paddingHorizontal: 20 },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Car Model*",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: C[0].title,
                              }),
                            ],
                          }),
                          Object(g.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Car Varient*",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: C[0].title,
                              }),
                            ],
                          }),
                          Object(g.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Varient Color*",
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: C[0].color,
                              }),
                            ],
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 10,
                              marginVertical: 5,
                              color: "grey",
                            },
                            children: "The fields marked as * are mandatory",
                          }),
                          Object(g.jsx)(u.default, {
                            style: { justifyContent: "end", width: "100%" },
                            children: Object(g.jsx)(v.default, {
                              style: {
                                backgroundColor: "#0D4C92",
                                color: "white",
                                width: 170,
                                paddingHorizontal: 15,
                                paddingVertical: 8,
                                marginVertical: 15,
                                borderRadius: 6,
                              },
                              onPress: function () {
                                w(3);
                              },
                              children: Object(g.jsx)(m.default, {
                                style: { color: "white" },
                                children: "Confirm & Continue",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(g.jsx)(u.default, {}),
              3 == x
                ? Object(g.jsxs)(u.default, {
                    children: [
                      Object(g.jsxs)(u.default, {
                        Style: 2 === x ? {} : { display: "none" },
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              alignSelf: "flex-start",
                              marginVertical: 15,
                            },
                            children: [
                              Object(g.jsx)(u.default, {
                                style: {
                                  backgroundColor: "#0D4C92",
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: 14,
                                },
                                children: Object(g.jsx)(m.default, {
                                  style: { color: "white" },
                                  children: "1",
                                }),
                              }),
                              Object(g.jsx)(m.default, {
                                style: { fontWeight: "600" },
                                children: "OUTLET DETAILS",
                              }),
                            ],
                          }),
                          Object(g.jsxs)(u.default, {
                            style: { paddingHorizontal: 20 },
                            children: [
                              Object(g.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      color: "#8c8c8c",
                                      fontSize: 12,
                                      marginBottom: 5,
                                    },
                                    children: "Select Your City*",
                                  }),
                                  Object(g.jsx)(Ft.default, {
                                    buttonStyle: {
                                      width: "100%",
                                      padding: 0,
                                      fontSize: 14,
                                      height: 35,
                                    },
                                    rowStyle: { padding: 10 },
                                    buttonTextStyle: { fontSize: 14 },
                                    data: [
                                      { name: "Bangalore" },
                                      { name: "Hyderbad" },
                                    ],
                                    renderDropdownIcon: function () {
                                      return Object(g.jsx)(
                                        O.ChevronDownIcon,
                                        {}
                                      );
                                    },
                                    onSelect: function (e, t) {
                                      console.log(e, t),
                                        W(
                                          Yt(
                                            Yt({}, M),
                                            {},
                                            it()({}, "city", e.name)
                                          )
                                        );
                                    },
                                    defaultButtonText:
                                      "--- Please select Your City ---",
                                    buttonTextAfterSelection: function (e, t) {
                                      return Object(g.jsx)(m.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 14,
                                          padding: 10,
                                          outlineStyle: "none",
                                        },
                                        children: M.city,
                                      });
                                    },
                                    rowTextForSelection: function (e, t) {
                                      return Object(g.jsx)(m.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 10,
                                          padding: 6,
                                          outlineStyle: "none",
                                        },
                                        children: e.name,
                                      });
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: {
                                      color: "#8c8c8c",
                                      fontSize: 12,
                                      marginBottom: 5,
                                    },
                                    children: "Select Your Outlet*",
                                  }),
                                  Object(g.jsx)(Ft.default, {
                                    buttonStyle: {
                                      width: "100%",
                                      padding: 0,
                                      fontSize: 14,
                                      height: 35,
                                    },
                                    rowStyle: { padding: 10 },
                                    buttonTextStyle: { fontSize: 14 },
                                    data: [
                                      { name: "Nayandhalli" },
                                      { name: "JP Nagar" },
                                      { name: "RR Nagar" },
                                    ],
                                    renderDropdownIcon: function () {
                                      return Object(g.jsx)(
                                        O.ChevronDownIcon,
                                        {}
                                      );
                                    },
                                    onSelect: function (e, t) {
                                      console.log(e, t),
                                        W(
                                          Yt(
                                            Yt({}, M),
                                            {},
                                            it()({}, "outlet", e.name)
                                          )
                                        );
                                    },
                                    defaultButtonText:
                                      "--- Please select Your Outlet ---",
                                    buttonTextAfterSelection: function (e, t) {
                                      return Object(g.jsx)(m.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 14,
                                          padding: 10,
                                          outlineStyle: "none",
                                        },
                                        children: M.outlet,
                                      });
                                    },
                                    rowTextForSelection: function (e, t) {
                                      return Object(g.jsx)(m.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 10,
                                          padding: 6,
                                          outlineStyle: "none",
                                        },
                                        children: e.name,
                                      });
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 10,
                                  marginVertical: 5,
                                  color: "grey",
                                },
                                children:
                                  "The fields marked as * are mandatory",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              alignSelf: "flex-start",
                              marginVertical: 15,
                            },
                            children: [
                              Object(g.jsx)(u.default, {
                                style: {
                                  backgroundColor: "#0D4C92",
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: 14,
                                },
                                children: Object(g.jsx)(m.default, {
                                  style: { color: "white" },
                                  children: "2",
                                }),
                              }),
                              Object(g.jsx)(m.default, {
                                style: { fontWeight: "600" },
                                children: "BUYER DETAILS",
                              }),
                            ],
                          }),
                          Object(g.jsxs)(u.default, {
                            style: { paddingHorizontal: 20 },
                            children: [
                              Object(g.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Type Your Address1*",
                                  }),
                                  Object(g.jsx)(dt.default, {
                                    value: M.address1,
                                    placeholder: "Address1*",
                                    placeholderTextColor: "#8c8c8c",
                                    style: {
                                      color: "black",
                                      borderBottomColor: "grey",
                                      borderBottomWidth: 2,
                                      padding: 6,
                                      outlineStyle: "none",
                                    },
                                    onChangeText: function (e) {
                                      W(
                                        Yt(
                                          Yt({}, M),
                                          {},
                                          it()({}, "address1", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Type Your Address2*",
                                  }),
                                  Object(g.jsx)(dt.default, {
                                    value: M.address2,
                                    placeholder: "Addres2*",
                                    placeholderTextColor: "#8c8c8c",
                                    style: {
                                      color: "black",
                                      borderBottomColor: "grey",
                                      borderBottomWidth: 2,
                                      padding: 6,
                                      outlineStyle: "none",
                                    },
                                    onChangeText: function (e) {
                                      W(
                                        Yt(
                                          Yt({}, M),
                                          {},
                                          it()({}, "address2", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                children: [
                                  Object(g.jsx)(m.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Pincode*",
                                  }),
                                  Object(g.jsx)(dt.default, {
                                    value: M.pincode,
                                    placeholder: "Pincode*",
                                    keyboardType: "numeric",
                                    maxLength: 6,
                                    placeholderTextColor: "#8c8c8c",
                                    style: {
                                      color: "black",
                                      borderBottomColor: "grey",
                                      borderBottomWidth: 2,
                                      padding: 6,
                                      outlineStyle: "none",
                                    },
                                    onChangeText: function (e) {
                                      W(
                                        Yt(
                                          Yt({}, M),
                                          {},
                                          it()({}, "pincode", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsx)(m.default, {
                                style: {
                                  fontSize: 10,
                                  marginVertical: 5,
                                  color: "grey",
                                },
                                children:
                                  "The fields marked as * are mandatory",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "top",
                          margin: 10,
                        },
                        children: [
                          Object(g.jsx)(Vt.default, {
                            style: { marginRight: 12 },
                            onValueChange: p,
                            value: f,
                          }),
                          Object(g.jsxs)(u.default, {
                            style: { width: "90%" },
                            children: [
                              Object(g.jsx)(m.default, {
                                style: { fontWeight: "700", fontSize: 12 },
                                children: "Disclaimer:",
                              }),
                              Object(g.jsxs)(m.default, {
                                style: {
                                  fontSize: 10,
                                  color: "grey",
                                  marginVertical: 3,
                                },
                                children: [
                                  " ",
                                  "I agree that by clicking the \u2018Submit\u2019 button below, I am explicitly soliciting a call and message via whatsapp and any other medium from Maruti Suzuki India Ltd. or its partners on my \u2018Mobile\u2019.",
                                ],
                              }),
                              Object(g.jsx)(m.default, {
                                style: { fontSize: 12, fontWeight: "700" },
                                children:
                                  "*Prices/Schemes prevailing at the time of invoice /bill shall be applicable.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsx)(u.default, {
                        style: { justifyContent: "end", width: "100%" },
                        children: Object(g.jsx)(v.default, {
                          style: {
                            backgroundColor: "#0D4C92",
                            width: 220,
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            marginVertical: 15,
                            borderRadius: 6,
                          },
                          onPress: function () {
                            0 === M.city.length
                              ? (I("please Choose Your City"), s(!0))
                              : 0 === M.outlet.length
                              ? (I("please Choose Your Outlet"), s(!0))
                              : M.address1.length < 4
                              ? (I("please enter Your Address"), s(!0))
                              : 6 !== M.pincode.length
                              ? (I("please enter Your Pincode"), s(!0))
                              : (console.log(M),
                                w(1),
                                t.navigate("Finalpage", { user: M }));
                          },
                          children: Object(g.jsx)(m.default, {
                            style: { color: "white" },
                            children: "Submit & Make Payment",
                          }),
                        }),
                      }),
                    ],
                  })
                : Object(g.jsx)(u.default, {}),
              Object(g.jsx)(u.default, {}),
            ],
          });
        },
        Gt = l.default.create({
          container: {
            margin: 10,
            marginTop: 40,
            shadowOffset: 3,
            shadowOpacity: 0.5,
            shadowColor: "black",
            elevation: 5,
            padding: 15,
            backgroundColor: "#fff",
            justifyContent: "center",
          },
          Heading: { fontSize: 30, fontWeight: "600" },
          buttonlayout: {
            paddingHorizontal: 15,
            paddingVertical: 6,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          },
          greytxt: { color: "red" },
        }),
        Kt = i(23),
        Ut = i.n(Kt),
        Xt = function (e) {
          var t = e.toast,
            i = e.message;
          return Object(g.jsxs)(g.Fragment, {
            children: [
              "success" === i
                ? Object(g.jsxs)(u.default, {
                    style: {
                      width: "80%",
                      marginTop: 60,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      padding: 10,
                      borderRadius: 12,
                      backgroundColor: "#cdffcd",
                      borderWidth: 0.5,
                      borderColor: "lightgreen",
                      flexDirection: "row",
                    },
                    children: [
                      Object(g.jsx)(ShieldCheckIcon, {
                        size: 20,
                        color: "green",
                      }),
                      Object(g.jsx)(m.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: P,
                          textAlign: "center",
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
              "warning" === i
                ? Object(g.jsxs)(u.default, {
                    style: {
                      marginTop: 60,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      padding: 10,
                      borderRadius: 12,
                      backgroundColor: "#FEBA4A",
                      borderWidth: 0.5,
                      borderColor: "orange",
                      flexDirection: "row",
                    },
                    children: [
                      Object(g.jsx)(O.ShieldExclamationIcon, {
                        size: 20,
                        color: "orange",
                      }),
                      Object(g.jsx)(m.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: P,
                          textAlign: "center",
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
              "danger" === i
                ? Object(g.jsxs)(u.default, {
                    style: {
                      width: "80%",
                      marginTop: 60,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      padding: 10,
                      borderRadius: 12,
                      backgroundColor: "#F25C4E",
                      borderWidth: 0.5,
                      borderColor: "lightgreen",
                      flexDirection: "row",
                    },
                    children: [
                      Object(g.jsx)(O.XCircleIcon, { size: 20, color: "red" }),
                      Object(g.jsx)(m.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: P,
                          textAlign: "center",
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        Jt =
          (l.default.create({}),
          function (e) {
            var t = e.length,
              r = void 0 === t ? 6 : t,
              a = (e.onComplete, e.navigation),
              l = Object(d.useState)(!1),
              s = o()(l, 2),
              c = s[0],
              h = s[1],
              f = Object(d.useState)(""),
              j = o()(f, 2),
              b = j[0],
              y = j[1],
              x = Object(d.useState)(""),
              O = o()(x, 2),
              w = O[0],
              S = O[1],
              _ = Object(d.useState)(!1),
              C = o()(_, 2),
              z = C[0],
              R = C[1],
              B = Object(d.useState)(!1),
              I = o()(B, 2),
              P = I[0],
              T = I[1],
              M = Object(d.useState)(!0),
              W = o()(M, 2),
              A = W[0],
              V = (W[1], Object(d.useState)(!1)),
              E = o()(V, 2),
              H = (E[0], E[1]),
              N = Object(d.useState)(""),
              F = o()(N, 2),
              L = (F[0], F[1], Object(d.useState)(!0)),
              Y = o()(L, 2),
              q = Y[0],
              G = Y[1],
              K = Object(d.useState)(),
              U = o()(K, 2),
              Q = U[0],
              Z = U[1],
              $ = Object(d.useState)(""),
              ee = o()($, 2),
              te = ee[0],
              ie = ee[1],
              ne = Object(d.useState)(!1),
              ae = o()(ne, 2),
              oe = ae[0],
              le = ae[1],
              de = Object(d.useState)(new pe.default.Value(0)),
              se = o()(de, 1)[0],
              ce = Object(d.useRef)([]),
              ue = (function () {
                var e = n()(function* (e) {
                  var t = yield re({ phone: e });
                  console.log(t),
                    404 === t.data.error
                      ? (he(e), h(1))
                      : (G(!1),
                        a.navigate("Enter Your Pin", { email: "", mobile: e }));
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              he = (function () {
                var e = n()(function* (e) {
                  var t = {
                      flow_id: "2079031d-a1ac-4bbe-bf58-2495bd6e5703",
                      to: { mobile: "+91" + e, email: "yadhurajm@gmail.com" },
                    },
                    i = yield X(t);
                  if (!i.ok) return console.log(i.data);
                  T(i.data.data.verify_id), H({ isOtpSent: !0 });
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              fe = (function () {
                var e = n()(function* (e, t, i) {
                  if (6 === t.length) {
                    var r = { verify_id: e, otp: t };
                    console.log(i),
                      (yield J(r)).ok
                        ? (h(null),
                          G(!0),
                          a.navigate("conformPinScreen", {
                            email: "",
                            mobile: i,
                            userStatus: q,
                          }),
                          le(!1))
                        : (Z(!0), le(!0));
                  }
                });
                return function (t, i, r) {
                  return e.apply(this, arguments);
                };
              })();
            Object(d.useEffect)(
              function () {
                oe &&
                  pe.default
                    .sequence([
                      pe.default.timing(se, {
                        toValue: 10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      pe.default.timing(se, {
                        toValue: -10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      pe.default.timing(se, {
                        toValue: 10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      pe.default.timing(se, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                    ])
                    .start(function () {
                      return le(!1);
                    });
              },
              [oe, se]
            );
            var ge = function (e, t) {
                var i = Ut()(te);
                (i[t] = e),
                  ie(i.join("")),
                  0 === e.length && t > 0
                    ? (ce.current[t - 1].focus(),
                      (i[t - 1] = ""),
                      ie(i.join("")))
                    : 1 === e.length && t < r - 1 && ce.current[t + 1].focus(),
                  fe(P, i.join(""), w);
              },
              je = function (e, t) {
                if ("Backspace" === e.nativeEvent.key && t > 0) {
                  var i = Ut()(te);
                  "" !== i[t] &&
                    (ce.current[t - 1].focus(),
                    (i[t - 1] = ""),
                    console.log(i)),
                    (i[t] = ""),
                    ie(i.join(""));
                }
              },
              be = Array(r).fill(0);
            return Object(g.jsxs)(p, {
              children: [
                Object(g.jsxs)(u.default, {
                  style: { backgroundColor: "#fff", flex: 1 },
                  children: [
                    Object(g.jsx)(u.default, {
                      style: Qt.imgCont,
                      children: Object(g.jsx)(D.default, {
                        source: i(255),
                        style: Qt.img,
                      }),
                    }),
                    Object(g.jsx)(u.default, {
                      children: Object(g.jsxs)(m.default, {
                        style: Qt.headline,
                        children: [
                          "Karnataka's #1",
                          "\n",
                          "Maruti Suzuki Dealership App.",
                        ],
                      }),
                    }),
                    Object(g.jsxs)(u.default, {
                      style: Qt.hrlines,
                      children: [
                        Object(g.jsx)(u.default, { style: Qt.line }),
                        Object(g.jsx)(m.default, {
                          style: Qt.loginText,
                          children: "Login or Sign up",
                        }),
                        Object(g.jsx)(u.default, { style: Qt.line }),
                      ],
                    }),
                    Object(g.jsxs)(u.default, {
                      style: {
                        backgroundColor: "#eee",
                        borderRadius: 12,
                        width: "90%",
                        alignSelf: "center",
                        alignItems: "center",
                        marginBottom: 25,
                        elevation: 5,
                        flexDirection: "row",
                        paddingHorizontal: 10,
                      },
                      children: [
                        Object(g.jsx)(D.default, {
                          style: { height: 25, width: 30, borderRadius: 4 },
                          source: i(504),
                        }),
                        Object(g.jsx)(m.default, {
                          style: {
                            color: "black",
                            fontSize: 15,
                            fontWeight: "500",
                            paddingHorizontal: 4,
                            marginLeft: 5,
                          },
                          children: "+91",
                        }),
                        Object(g.jsx)(dt.default, {
                          autoFocus: !0,
                          style: {
                            width: 150,
                            height: 50,
                            outline: "none",
                            marginLeft: 10,
                            fontSize: 18,
                            flex: 1,
                          },
                          placeholder: "Enter your number",
                          placeholderTextColor: "grey",
                          keyboardType: "number-pad",
                          maxLength: 14,
                          onChangeText: function (e) {
                            !(function (e) {
                              var t = e.replace(/[\(\ \)\-]/g, "");
                              S(t);
                              var i = ("" + e)
                                .replace(/\D/g, "")
                                .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
                              if (i) {
                                var r = [
                                  i[1] ? "+1 " : "",
                                  "(",
                                  i[2],
                                  ") ",
                                  i[3],
                                  "-",
                                  i[4],
                                ].join("");
                                y(r);
                              } else y(e);
                            })(e),
                              R("");
                          },
                          value: b,
                        }),
                        Object(g.jsx)(m.default, {
                          style: {
                            color: "red",
                            fontSize: 12,
                            paddingLeft: 10,
                          },
                          children: z,
                        }),
                      ],
                    }),
                    Object(g.jsx)(v.default, {
                      onPress: function () {
                        !(function (e) {
                          /^[0-9]{10}$/i.test(e) ? ue(e) : R("Invalid Number");
                        })(w);
                      },
                      children: Object(g.jsx)(u.default, {
                        style: Qt.btn,
                        children: Object(g.jsx)(m.default, {
                          style: Qt.txt,
                          children: "continue",
                        }),
                      }),
                    }),
                    Object(g.jsxs)(m.default, {
                      style: {
                        color: k,
                        position: "absolute",
                        bottom: 10,
                        textAlign: "center",
                        alignSelf: "center",
                      },
                      children: [
                        "By Continuing you agree our ",
                        "\n",
                        " Terms and Condition content policies",
                      ],
                    }),
                  ],
                }),
                A
                  ? Object(g.jsx)(g.Fragment, {
                      children: Object(g.jsx)(Ue.BottomSheet, {
                        visible: 1 === c,
                        onBackButtonPress: function () {
                          h(null);
                        },
                        onBackdropPress: function () {
                          h(null);
                        },
                        children: Object(g.jsxs)(u.default, {
                          style: Qt.bottomNavigationView,
                          children: [
                            Object(g.jsxs)(m.default, {
                              style: {
                                fontSize: 12,
                                fontWeight: "500",
                                padding: 10,
                              },
                              children: [
                                "Please Enter OTP sent to",
                                Object(g.jsxs)(m.default, {
                                  style: {
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: k,
                                  },
                                  children: ["+91 ", w],
                                }),
                              ],
                            }),
                            Object(g.jsx)(u.default, {
                              children: oe
                                ? Object(g.jsx)(pe.default.View, {
                                    style: [
                                      Qt.errorText,
                                      { transform: [{ translateX: se }] },
                                    ],
                                    children: Object(g.jsx)(u.default, {
                                      style: Qt.container,
                                      children: be.map(function (e, t) {
                                        return Object(g.jsx)(
                                          dt.default,
                                          {
                                            value: te[t] || "",
                                            onChangeText: function (e) {
                                              return ge(e, t);
                                            },
                                            maxLength: 1,
                                            style: [
                                              Qt.input,
                                              oe && Qt.inputError,
                                            ],
                                            keyboardType: "number-pad",
                                            ref: function (e) {
                                              ce.current[t] = e;
                                            },
                                            onSubmitEditing: function () {
                                              t === r - 1 &&
                                                ce.current[t].blur();
                                            },
                                            onKeyPress: function (e) {
                                              return je(e, t);
                                            },
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  })
                                : Object(g.jsx)(u.default, {
                                    style: Qt.container,
                                    children: be.map(function (e, t) {
                                      return Object(g.jsx)(
                                        dt.default,
                                        {
                                          value: te[t] || "",
                                          onChangeText: function (e) {
                                            return ge(e, t);
                                          },
                                          maxLength: 1,
                                          style: [
                                            Qt.input,
                                            oe && Qt.inputError,
                                          ],
                                          keyboardType: "numeric",
                                          ref: function (e) {
                                            ce.current[t] = e;
                                          },
                                          onSubmitEditing: function () {
                                            t === r - 1 && ce.current[t].blur();
                                          },
                                          onKeyPress: function (e) {
                                            return je(e, t);
                                          },
                                        },
                                        t
                                      );
                                    }),
                                  }),
                            }),
                            Q
                              ? Object(g.jsx)(Xt, {
                                  message: "warning",
                                  toast: "Please Enter Correct OTP",
                                })
                              : null,
                          ],
                        }),
                      }),
                    })
                  : Object(g.jsx)(ve, {}),
              ],
            });
          }),
        Qt = l.default.create({
          btn: {
            backgroundColor: "blue",
            padding: 15,
            borderRadius: 12,
            width: "90%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 25,
          },
          headline: {
            fontSize: 25,
            fontWeight: "900",
            textAlign: "center",
            color: I,
            marginVertical: 20,
          },
          hrlines: {
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          },
          img: { height: "100%", width: "100%", resizeMode: "contain" },
          imgCont: { width: "100%", height: "25%" },
          line: { height: 1, flex: 1, backgroundColor: "gray" },
          logoCont: {
            padding: 6,
            elevation: 6,
            backgroundColor: R,
            borderRadius: 12,
          },
          sec_line: { height: 0.8, width: "50%", backgroundColor: k },
          loginText: {
            marginLeft: 15,
            marginRight: 15,
            fontWeight: "600",
            fontSize: 17,
            color: k,
          },
          numBox: { width: "95%", height: 15, elevation: 6 },
          socialMediaCont: {
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            marginVertical: 10,
          },
          txt: { color: R, fontSize: 15, fontWeight: "500" },
          textInput: {},
          bottomNavigationView: { backgroundColor: "#fff", height: 300 },
          container: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
          },
          input: {
            height: 40,
            width: 40,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: "center",
            borderColor: "lightgray",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
          },
          inputError: { borderColor: "red" },
          errorText: { color: "red", fontSize: 16, marginTop: 8 },
        });
      function Zt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = We()(e);
          if (t) {
            var n = We()(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return Te()(this, i);
        };
      }
      !(function (e) {
        Ie()(r, e);
        var t = Zt(r);
        function r(e) {
          var i;
          return (
            ke()(this, r), ((i = t.call(this, e)).state = { code: null }), i
          );
        }
        Re()(r, [
          {
            key: "render",
            value: function () {
              return Object(g.jsxs)(u.default, {
                style: { backgroundColor: "#fff", flex: 1 },
                children: [
                  Object(g.jsx)(u.default, {
                    style: $t.imgCont,
                    children: Object(g.jsx)(D.default, {
                      source: i(255),
                      style: $t.img,
                    }),
                  }),
                  Object(g.jsx)(u.default, {
                    children: Object(g.jsx)(m.default, {
                      style: $t.headline,
                      children:
                        "please Enter the otp sent to the given phone number.",
                    }),
                  }),
                  Object(g.jsx)(u.default, {
                    style: {
                      backgroundColor: "white",
                      borderRadius: 12,
                      width: "90%",
                      alignSelf: "center",
                      alignItems: "center",
                      marginBottom: 25,
                      elevation: 5,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    },
                  }),
                  Object(g.jsxs)(m.default, {
                    style: {
                      color: k,
                      position: "absolute",
                      bottom: 10,
                      textAlign: "center",
                      alignSelf: "center",
                    },
                    children: [
                      "By Continuing you agree our ",
                      "\n",
                      " Terms and Condition content policies",
                    ],
                  }),
                ],
              });
            },
          },
        ]);
      })(s.a.Component);
      var $t = l.default.create({
          btn: {
            backgroundColor: "blue",
            padding: 15,
            borderRadius: 12,
            width: "90%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 25,
          },
          headline: {
            fontSize: 15,
            fontWeight: "600",
            textAlign: "center",
            color: I,
            marginVertical: 20,
          },
          hrlines: {
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          },
          img: { height: "100%", width: "100%", resizeMode: "contain" },
          imgCont: { width: "100%", height: "25%" },
          line: { height: 1, width: "30%", backgroundColor: "gray" },
          logoCont: {
            padding: 6,
            elevation: 6,
            backgroundColor: R,
            borderRadius: 12,
          },
          sec_line: { height: 0.8, width: "50%", backgroundColor: k },
          loginText: {
            marginLeft: 15,
            marginRight: 15,
            fontWeight: "600",
            fontSize: 17,
            color: k,
          },
          numBox: { width: "95%", height: 15, elevation: 6 },
          socialMediaCont: {
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            marginVertical: 10,
          },
          txt: { color: R, fontSize: 15, fontWeight: "500" },
          textInput: {},
        }),
        ei = function (e) {
          var t = e.length,
            r = void 0 === t ? 6 : t,
            a = (e.onComplete, e.navigation),
            l = e.route,
            s = Object(d.useState)(""),
            c = o()(s, 2),
            h = c[0],
            f = c[1],
            j = Object(d.useState)(""),
            b = o()(j, 2),
            y = (b[0], b[1], Object(d.useState)("")),
            x = o()(y, 2),
            O = (x[0], x[1], Object(d.useState)("")),
            S = o()(O, 2),
            _ = S[0],
            C = (S[1], Object(d.useState)("")),
            k = o()(C, 2),
            z = k[0],
            R = k[1],
            B = Object(d.useState)(!1),
            I = o()(B, 2),
            P = I[0],
            T = I[1],
            M = Object(d.useState)(new pe.default.Value(0)),
            W = o()(M, 1)[0],
            A = Object(d.useRef)([]),
            V = Object(d.useRef)([]);
          console.log(_);
          var E = (function () {
              var e = n()(function* (e, t) {
                var i = yield ne({
                  username: l.params.mobile,
                  password: e,
                  email: "",
                  first_name: "",
                  last_name: "",
                });
                H(l.params.mobile, i.data.id);
                var r = yield oe({ phone: l.params.mobile, password: e });
                try {
                  yield w.default.setItem(
                    "userCredential",
                    JSON.stringify({
                      phone: l.params.mobile,
                      password: e,
                      profile_id: r.data.profile_id,
                    })
                  );
                } catch (n) {
                  console.log(n);
                }
                a.navigate("app"), l.params.mobile, r.data.profile_id;
              });
              return function (t, i) {
                return e.apply(this, arguments);
              };
            })(),
            H = (function () {
              var e = n()(function* (e, t) {
                var i = yield ae({
                  phone: e,
                  gender: "",
                  year_of_birth: 0,
                  lat: "",
                  long: "",
                  user: t,
                });
                console.log(i);
              });
              return function (t, i) {
                return e.apply(this, arguments);
              };
            })();
          Object(d.useEffect)(
            function () {
              P &&
                pe.default
                  .sequence([
                    pe.default.timing(W, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(W, {
                      toValue: -10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(W, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(W, {
                      toValue: 0,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                  ])
                  .start(function () {
                    return T(!1);
                  });
            },
            [P, W]
          );
          var N = function (e, t) {
              var i = Ut()(h);
              (i[t] = e),
                f(i.join("")),
                0 === e.length && t > 0
                  ? (A.current[t - 1].focus(), (i[t - 1] = ""), f(i.join("")))
                  : 1 === e.length && t < r - 1 && A.current[t + 1].focus();
            },
            F = function (e, t) {
              var i = Ut()(z);
              (i[t] = e),
                R(i.join("")),
                0 === e.length && t > 0
                  ? (V.current[t - 1].focus(), (i[t - 1] = ""), R(i.join("")))
                  : 1 === e.length && t < r - 1 && V.current[t + 1].focus(),
                (function (e, t) {
                  6 == t.length && T(e !== t);
                })(h, i.join(""));
            };
          console.log(h), console.log(z);
          var L = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var i = Ut()(h);
                "" !== i[t] &&
                  (A.current[t - 1].focus(), (i[t - 1] = ""), console.log(i)),
                  (i[t] = ""),
                  f(i.join(""));
              }
            },
            Y = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var i = Ut()(z);
                "" !== i[t] &&
                  (V.current[t - 1].focus(), (i[t - 1] = ""), console.log(i)),
                  (i[t] = ""),
                  R(i.join(""));
              }
            },
            q = Array(r).fill(0);
          return Object(g.jsx)(p, {
            children: Object(g.jsxs)(u.default, {
              style: { flex: 1 },
              children: [
                Object(g.jsx)(D.default, {
                  source: i(256),
                  style: { width: "100%", height: 170, resizeMode: "contain" },
                }),
                Object(g.jsx)(m.default, {
                  style: {
                    fontSize: 22,
                    fontWeight: "600",
                    color: "#000",
                    paddingVertical: 5,
                    alignSelf: "center",
                  },
                  children: "Create Your 6 Digit Login Pin",
                }),
                Object(g.jsxs)(u.default, {
                  style: { flex: 1, position: "relative" },
                  children: [
                    Object(g.jsx)(u.default, {
                      children: P
                        ? Object(g.jsx)(pe.default.View, {
                            style: [
                              ti.errorText,
                              { transform: [{ translateX: W }] },
                            ],
                            children: Object(g.jsx)(u.default, {
                              style: ti.container,
                              children: q.map(function (e, t) {
                                return Object(g.jsx)(
                                  dt.default,
                                  {
                                    value: h[t] || "",
                                    onChangeText: function (e) {
                                      return N(e, t);
                                    },
                                    maxLength: 1,
                                    style: [ti.input, P && ti.inputError],
                                    keyboardType: "number-pad",
                                    ref: function (e) {
                                      A.current[t] = e;
                                    },
                                    onSubmitEditing: function () {
                                      t === r - 1 && A.current[t].blur();
                                    },
                                    onKeyPress: function (e) {
                                      return L(e, t);
                                    },
                                  },
                                  t
                                );
                              }),
                            }),
                          })
                        : Object(g.jsx)(u.default, {
                            style: ti.container,
                            children: q.map(function (e, t) {
                              return Object(g.jsx)(
                                dt.default,
                                {
                                  value: h[t] || "",
                                  onChangeText: function (e) {
                                    return N(e, t);
                                  },
                                  maxLength: 1,
                                  style: [ti.input, P && ti.inputError],
                                  keyboardType: "numeric",
                                  ref: function (e) {
                                    A.current[t] = e;
                                  },
                                  onSubmitEditing: function () {
                                    t === r - 1 && A.current[t].blur();
                                  },
                                  onKeyPress: function (e) {
                                    return L(e, t);
                                  },
                                },
                                t
                              );
                            }),
                          }),
                    }),
                    Object(g.jsx)(u.default, {
                      children: P
                        ? Object(g.jsx)(pe.default.View, {
                            style: [
                              ti.errorText,
                              { transform: [{ translateX: W }] },
                            ],
                            children: Object(g.jsx)(u.default, {
                              style: ti.container,
                              children: q.map(function (e, t) {
                                return Object(g.jsx)(
                                  dt.default,
                                  {
                                    value: z[t] || "",
                                    onChangeText: function (e) {
                                      return F(e, t);
                                    },
                                    maxLength: 1,
                                    style: [ti.input, P && ti.inputError],
                                    keyboardType: "number-pad",
                                    ref: function (e) {
                                      V.current[t] = e;
                                    },
                                    onSubmitEditing: function () {
                                      t === r - 1 && V.current[t].blur();
                                    },
                                    onKeyPress: function (e) {
                                      return Y(e, t);
                                    },
                                  },
                                  t
                                );
                              }),
                            }),
                          })
                        : Object(g.jsx)(u.default, {
                            style: ti.container,
                            children: q.map(function (e, t) {
                              return Object(g.jsx)(
                                dt.default,
                                {
                                  value: z[t] || "",
                                  onChangeText: function (e) {
                                    return F(e, t);
                                  },
                                  maxLength: 1,
                                  style: [ti.input, P && ti.inputError],
                                  keyboardType: "numeric",
                                  ref: function (e) {
                                    V.current[t] = e;
                                  },
                                  onSubmitEditing: function () {
                                    t === r - 1 && V.current[t].blur();
                                  },
                                  onKeyPress: function (e) {
                                    return Y(e, t);
                                  },
                                },
                                t
                              );
                            }),
                          }),
                    }),
                    P
                      ? Object(g.jsx)(Xt, {
                          message: "warning",
                          toast: "password did not match !",
                        })
                      : null,
                    Object(g.jsx)(v.default, {
                      style: {
                        width: "85%",
                        alignItems: "center",
                        backgroundColor: "#F74300",
                        justifyContent: "center",
                        padding: 13,
                        borderRadius: 12,
                        alignSelf: "center",
                        position: "absolute",
                        bottom: 8,
                      },
                      onPress: function () {
                        E(h, z);
                      },
                      children: Object(g.jsx)(m.default, {
                        style: {
                          fontSize: 15,
                          fontWeight: "600",
                          color: "white",
                        },
                        children: "Submit",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ti = l.default.create({
          container: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
          },
          input: {
            height: 40,
            width: 40,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: "center",
            borderColor: "lightgray",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
          },
          inputError: { borderColor: "red" },
          errorText: { color: "red", fontSize: 16, marginTop: 8 },
        }),
        ii = function () {
          return Object(g.jsx)(u.default, {
            children: Object(g.jsx)(m.default, {
              children: "conformForgotPin",
            }),
          });
        },
        ri =
          (l.default.create({}),
          l.default.create({
            container: {
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              alignSelf: "center",
              marginTop: 20,
            },
            input: {
              height: 40,
              width: 40,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
              borderColor: "lightgray",
              shadowColor: "gray",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 3,
            },
            inputError: { borderColor: "red" },
            errorText: { color: "red", fontSize: 16, marginTop: 8 },
          })),
        ni = function (e) {
          var t = e.length,
            r = void 0 === t ? 6 : t,
            a = (e.onComplete, e.navigation),
            l = e.route,
            s = Object(d.useState)(""),
            c = o()(s, 2),
            h = c[0],
            f = c[1],
            p = Object(d.useState)(!1),
            j = o()(p, 2),
            b = j[0],
            y = j[1],
            v = Object(d.useState)(new pe.default.Value(0)),
            x = o()(v, 1)[0],
            O = Object(d.useRef)([]),
            S = Object(d.useState)(""),
            _ = o()(S, 2),
            C = _[0],
            k = (_[1], Object(d.useState)("")),
            z = o()(k, 2),
            R =
              (z[0],
              z[1],
              (function () {
                var e = n()(function* (e, t) {
                  if (6 == t.length) {
                    var i = yield oe({ phone: e, password: t });
                    if (404 === i.data.error) y(!0);
                    else {
                      y(!1);
                      try {
                        yield w.default.setItem(
                          "userCredential",
                          JSON.stringify({
                            phone: l.params.mobile,
                            password: C,
                            profile_id: i.data.profile_id,
                          })
                        );
                      } catch (r) {
                        console.log(r);
                      }
                      a.navigate("app", {
                        phone: e,
                        profile_id: i.data.profile_id,
                      });
                    }
                  }
                });
                return function (t, i) {
                  return e.apply(this, arguments);
                };
              })());
          Object(d.useEffect)(
            function () {
              b &&
                pe.default
                  .sequence([
                    pe.default.timing(x, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(x, {
                      toValue: -10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(x, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    pe.default.timing(x, {
                      toValue: 0,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                  ])
                  .start(function () {
                    return y(!1);
                  });
            },
            [b, x]
          );
          var B = function (e, t) {
              var i = Ut()(h);
              (i[t] = e),
                f(i.join("")),
                0 === e.length && t > 0
                  ? (O.current[t - 1].focus(), (i[t - 1] = ""), f(i.join("")))
                  : 1 === e.length && t < r - 1 && O.current[t + 1].focus(),
                R(l.params.mobile, i.join(""));
            },
            I = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var i = Ut()(h);
                "" !== i[t] &&
                  (O.current[t - 1].focus(), (i[t - 1] = ""), console.log(i)),
                  (i[t] = ""),
                  f(i.join(""));
              }
            },
            P = Array(r).fill(0);
          return Object(g.jsxs)(u.default, {
            style: { flex: 1, backgroundColor: "white" },
            children: [
              Object(g.jsxs)(u.default, {
                children: [
                  Object(g.jsx)(D.default, {
                    source: i(256),
                    style: {
                      width: "100%",
                      height: 200,
                      resizeMode: "contain",
                    },
                  }),
                  Object(g.jsx)(m.default, {
                    style: {
                      fontSize: 22,
                      fontWeight: "600",
                      color: "#000",
                      paddingVertical: 5,
                      alignSelf: "center",
                    },
                    children: "Enter Your 6 digit App Login Pin",
                  }),
                ],
              }),
              b
                ? Object(g.jsx)(pe.default.View, {
                    style: [ri.errorText, { transform: [{ translateX: x }] }],
                    children: Object(g.jsx)(u.default, {
                      style: ri.container,
                      children: P.map(function (e, t) {
                        return Object(g.jsx)(
                          dt.default,
                          {
                            value: h[t] || "",
                            onChangeText: function (e) {
                              return B(e, t);
                            },
                            maxLength: 1,
                            style: [ri.input, b && ri.inputError],
                            keyboardType: "number-pad",
                            ref: function (e) {
                              O.current[t] = e;
                            },
                            onSubmitEditing: function () {
                              t === r - 1 && O.current[t].blur();
                            },
                            onKeyPress: function (e) {
                              return I(e, t);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : Object(g.jsx)(u.default, {
                    style: ri.container,
                    children: P.map(function (e, t) {
                      return Object(g.jsx)(
                        dt.default,
                        {
                          value: h[t] || "",
                          onChangeText: function (e) {
                            return B(e, t);
                          },
                          maxLength: 1,
                          style: [ri.input, b && ri.inputError],
                          keyboardType: "numeric",
                          ref: function (e) {
                            O.current[t] = e;
                          },
                          onSubmitEditing: function () {
                            t === r - 1 && O.current[t].blur();
                          },
                          onKeyPress: function (e) {
                            return I(e, t);
                          },
                        },
                        t
                      );
                    }),
                  }),
            ],
          });
        },
        ai = i(545),
        oi = i(101),
        li = i(339);
      function di(e) {
        var t = e.navigation,
          i = Object(d.useState)([]),
          r = o()(i, 2),
          a = r[0],
          l = r[1],
          s = Object(d.useState)(!1),
          c = o()(s, 2),
          h = c[0],
          f = c[1],
          j = Object(d.useRef)(null);
        Object(d.useEffect)(
          function () {
            return t.addListener("focus", function () {
              b(1);
            });
          },
          [t]
        ),
          Object(d.useEffect)(function () {
            b(1);
          }, []);
        var b = (function () {
            var e = n()(function* (e) {
              var t = yield ie(e);
              l(t.data), console.log(t.data), f(!0);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          y = (function () {
            var e = n()(function* (e) {
              var t = yield te(e);
              if (!t.ok) return console.log(t.data);
              b(1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(g.jsxs)(p, {
          children: [
            Object(g.jsx)(Se, {}),
            Object(g.jsx)(u.default, {
              style: { backgroundColor: "#fff", flex: 1 },
              children: Object(g.jsxs)(u.default, {
                style: si.container,
                children: [
                  Object(g.jsx)(m.default, {
                    style: {
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: 18,
                      fontWeight: "600",
                      paddingVertical: 10,
                    },
                    children: "Wishlisted cars",
                  }),
                  h
                    ? Object(g.jsx)(li.SwipeListView, {
                        showsVerticalScrollIndicator: !1,
                        ref: j,
                        data: a,
                        renderItem: function (e) {
                          return Object(g.jsxs)(v.default, {
                            activeOpacity: 1,
                            style: {
                              width: "97%",
                              height: 150,
                              borderRadius: 12,
                              position: "relative",
                              marginRight: 10,
                              backgroundColor: "white",
                              shadowColor: "gray",
                              shadowOpacity: 0.26,
                              shadowOffset: { width: 0, height: 2 },
                              shadowRadius: 12,
                              elevation: 3,
                              margin: 6,
                            },
                            onPress: function () {
                              return t.navigate("details", {
                                var_id: e.item.item.id,
                                item_id: e.item.item.itemlist,
                              });
                            },
                            children: [
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                },
                                children: [
                                  Object(g.jsx)(u.default, {
                                    style: { width: 130, height: 115 },
                                    children: Object(g.jsx)(D.default, {
                                      source: e.item.item.images[0],
                                      style: si.img,
                                    }),
                                  }),
                                  Object(g.jsxs)(u.default, {
                                    style: si.TextCont,
                                    children: [
                                      Object(g.jsx)(m.default, {
                                        style: si.imgText,
                                        children: e.item.item.title,
                                      }),
                                      Object(g.jsxs)(m.default, {
                                        style: {
                                          fontSize: 10,
                                          fontWeight: "600",
                                          color: "#bbb",
                                          marginTop: 4,
                                        },
                                        children: ["(", e.item.item.color, ")"],
                                      }),
                                      Object(g.jsx)(m.default, {
                                        style: si.desc,
                                        children: "Ex-showroom Price /-",
                                      }),
                                      Object(g.jsxs)(m.default, {
                                        style: si.price,
                                        children: [V(e.item.item.price), " /-"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  flex: 1,
                                  flexDirection: "row",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderColor: "#eee",
                                  borderTopColor: "#bbb",
                                  borderTopWidth: 0.5,
                                  borderTopLeftRadius: 4,
                                  borderTopRightRadius: 4,
                                },
                                children: [
                                  Object(g.jsx)(oi.default, {
                                    style: {
                                      width: "50%",
                                      height: "100%",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    },
                                    underlayColor: "red",
                                    onPress: function () {
                                      return y(e.item.id);
                                    },
                                    children: Object(g.jsxs)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      },
                                      children: [
                                        Object(g.jsx)(O.TrashIcon, {
                                          size: 17,
                                          color: "#bbb",
                                        }),
                                        Object(g.jsx)(m.default, {
                                          style: {
                                            fontSize: 12,
                                            fontWeight: "600",
                                            paddingLeft: 5,
                                            color: "#bbb",
                                          },
                                          children: "Remove",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(g.jsx)(u.default, {
                                    style: {
                                      height: "100%",
                                      width: 1,
                                      backgroundColor: "#bbb",
                                    },
                                  }),
                                  Object(g.jsx)(oi.default, {
                                    style: {
                                      width: "50%",
                                      height: "100%",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    },
                                    underlayColor: "green",
                                    onPress: function () {
                                      t.navigate("ebookscreen", {
                                        var_id: e.item.item.id,
                                        item_id: e.item.item.itemlist,
                                      });
                                    },
                                    children: Object(g.jsxs)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      },
                                      children: [
                                        Object(g.jsx)(O.BoltIcon, {
                                          size: 17,
                                          color: "#bbb",
                                        }),
                                        Object(g.jsx)(m.default, {
                                          style: {
                                            fontSize: 12,
                                            fontWeight: "600",
                                            paddingLeft: 5,
                                            color: "#bbb",
                                          },
                                          children: "E-Book",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                        renderHiddenItem: function (e) {
                          return Object(g.jsxs)(u.default, {
                            style: si.rowBack,
                            children: [
                              Object(g.jsx)(v.default, {
                                style: {
                                  borderRadius: 12,
                                  position: "relative",
                                  marginRight: 10,
                                  backgroundColor: R,
                                  borderWidth: 0.5,
                                  borderColor: "#eee",
                                  alignItems: "flex-start",
                                  paddingLeft: 20,
                                  justifyContent: "center",
                                  width: 60,
                                  position: "absolute",
                                  left: 0,
                                  height: "100%",
                                },
                                onPress: function () {
                                  return y(e.item.id);
                                },
                                children: Object(g.jsx)(O.TrashIcon, {
                                  size: 20,
                                  color: "red",
                                }),
                              }),
                              Object(g.jsx)(v.default, {
                                style: {
                                  borderRadius: 12,
                                  position: "relative",
                                  marginRight: 10,
                                  backgroundColor: R,
                                  borderWidth: 0.5,
                                  borderColor: "#eee",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 60,
                                  position: "absolute",
                                  right: 60,
                                  height: "100%",
                                },
                                onPress: function () {
                                  return y(e.item.id);
                                },
                                children: Object(g.jsx)(O.TrashIcon, {
                                  size: 20,
                                  color: "red",
                                }),
                              }),
                              Object(g.jsx)(v.default, {
                                style: {
                                  borderRadius: 12,
                                  position: "relative",
                                  backgroundColor: R,
                                  borderWidth: 0.5,
                                  borderColor: "#eee",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 60,
                                  position: "absolute",
                                  right: 0,
                                  height: "100%",
                                },
                                onPress: function () {},
                                children: Object(g.jsx)(O.ShoppingBagIcon, {
                                  size: 20,
                                  color: "green",
                                }),
                              }),
                            ],
                          });
                        },
                        leftOpenValue: 75,
                        rightOpenValue: -140,
                        previewRowKey: "0",
                        previewOpenValue: -40,
                        previewOpenDelay: 3e3,
                      })
                    : Object(g.jsxs)(u.default, {
                        style: { marginTop: 20 },
                        children: [
                          Object(g.jsx)(ve, {}),
                          Object(g.jsx)(ve, {}),
                          Object(g.jsx)(ve, {}),
                        ],
                      }),
                ],
              }),
            }),
          ],
        });
      }
      var si = l.default.create({
        container: { backgroundColor: "white", height: "100%" },
        backTextWhite: { color: "#FFF" },
        rowFront: {
          alignItems: "center",
          backgroundColor: "#CCC",
          borderBottomColor: "black",
          borderBottomWidth: 1,
          justifyContent: "center",
          height: 50,
        },
        rowBack: { flexDirection: "row", flex: 1, margin: 6, borderRadius: 12 },
        backRightBtn: {
          alignItems: "center",
          bottom: 0,
          justifyContent: "center",
          position: "absolute",
          top: 0,
          width: 75,
          borderRadius: 12,
          backgroundColor: R,
          marginLeft: 5,
          shadowColor: "gray",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 3,
        },
        backRightBtnLeft: { right: 75 },
        backRightBtnRight: { right: 0 },
        cardContainer: {
          width: 300,
          height: 100,
          flexDirection: "row",
          borderRadius: 12,
          backgroundColor: R,
          marginHorizontal: 5,
          shadowColor: "gray",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 3,
        },
        desc: {
          fontSize: 13,
          color: k,
          marginTop: 10,
          color: "green",
          fontWeight: "500",
        },
        img: { width: "100%", height: "100%", resizeMode: "contain" },
        imgText: {
          fontSize: 14,
          fontWeight: "600",
          color: "#000",
          paddingRight: 10,
        },
        TextCont: {
          width: 180,
          paddingLeft: 5,
          alignItems: "flex-start",
          justifyContent: "center",
        },
        price: { fontSize: 14, fontWeight: "600" },
        containerWrapper: { paddingVertical: 10 },
      });
      function ci(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = We()(e);
          if (t) {
            var n = We()(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return Te()(this, i);
        };
      }
      var ui = (function (e) {
          Ie()(i, e);
          var t = ci(i);
          function i(e) {
            var r;
            return ke()(this, i), ((r = t.call(this, e)).state = {}), r;
          }
          return (
            Re()(i, [
              {
                key: "render",
                value: function () {
                  return Object(g.jsx)(u.default, {
                    style: hi.container,
                    children: Object(g.jsx)(di, {
                      navigation: this.props.navigation,
                    }),
                  });
                },
              },
            ]),
            i
          );
        })(s.a.Component),
        hi = l.default.create({
          container: { backgroundColor: "white", flex: 1 },
          switchContainer: {
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 50,
            flexWrap: "wrap",
          },
          switch: {
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
            marginVertical: 2,
            paddingVertical: 10,
            width: je.default.get("window").width / 3,
          },
        });
      function fi(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function gi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fi(Object(i), !0).forEach(function (t) {
                it()(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : fi(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var pi = [
          {
            id: 1,
            title: "GoMechanic Speed 5W30 Sn Plus (3.5L) Engine Oil",
            price: "\u20b9344",
            catogery: "Spare Parts",
            img: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Inner%20Rear%20View%20Mirror.png",
            count: 1,
          },
          {
            id: 2,
            title:
              "MOBIS (Hyundai, Kia) Bonnet Lock, LATCH ASSY-HOOD 811300X900",
            price: "\u20b9234",
            catogery: "Spare Parts",
            img: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Front%20Bumper.png",
            count: 2,
          },
          {
            id: 3,
            title: "MGP Bumper Bracket, HOLDER,RR BUMPER SIDE,L 71822M53M00",
            price: "\u20b94563",
            catogery: "Spare Parts",
            img: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Hinge.png",
            count: 1,
          },
        ],
        ji = function () {
          var e = Object(d.useState)(1),
            t = o()(e, 2),
            i = (t[0], t[1], Object(d.useState)(pi)),
            r = o()(i, 2),
            n = r[0],
            a = r[1],
            l = function (e, t) {
              var i = n.map(function (i) {
                return (
                  console.log(e),
                  e === i.id
                    ? gi(
                        gi({}, i),
                        {},
                        it()(
                          {},
                          "count",
                          "plus" === t ? i.count + 1 : i.count - 1
                        )
                      )
                    : i
                );
              });
              a(i);
            };
          return Object(g.jsxs)(u.default, {
            style: { backgroundColor: "white", flex: 1 },
            children: [
              Object(g.jsxs)(u.default, {
                style: { flex: 1 },
                children: [
                  Object(g.jsx)(u.default, {
                    children: Object(g.jsx)(m.default, {
                      style: {
                        color: "#434343",
                        fontSize: 26,
                        fontWeight: "700",
                        textAlign: "center",
                        padding: 10,
                      },
                      children: "Cart",
                    }),
                  }),
                  Object(g.jsx)(A.default, {
                    data: n,
                    keyExtractor: function (e) {
                      return e.id;
                    },
                    renderItem: function (e) {
                      var t = e.item;
                      return Object(g.jsxs)(u.default, {
                        children: [
                          Object(g.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              paddingHorizontal: 20,
                              paddingVertical: 15,
                              justifyContent: "space-between",
                            },
                            children: [
                              Object(g.jsxs)(u.default, {
                                style: { flexDirection: "row" },
                                children: [
                                  Object(g.jsx)(D.default, {
                                    style: {
                                      width: 70,
                                      height: 70,
                                      marginRight: 20,
                                    },
                                    source: { uri: t.img },
                                  }),
                                  Object(g.jsxs)(u.default, {
                                    style: { justifyContent: "space-between" },
                                    children: [
                                      Object(g.jsx)(m.default, {
                                        style: {
                                          color: "#A0A0A0",
                                          fontWeight: "600",
                                          fontSize: 11,
                                          textAlign: "left",
                                          width: 180,
                                        },
                                        children: t.title,
                                      }),
                                      Object(g.jsx)(m.default, {
                                        style: {
                                          color: "#484848",
                                          fontWeight: "700",
                                        },
                                        children: t.price,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(u.default, {
                                style: {
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                },
                                children: [
                                  Object(g.jsx)(x.TrashIcon, {
                                    style: { alignSelf: "flex-end" },
                                    color: "#484848",
                                    size: 20,
                                  }),
                                  Object(g.jsxs)(u.default, {
                                    style: {
                                      flexDirection: "row",
                                      alignItems: "center",
                                    },
                                    children: [
                                      Object(g.jsx)(v.default, {
                                        onPress: function () {
                                          l(t.id, "plus");
                                        },
                                        children: Object(g.jsx)(
                                          x.PlusCircleIcon,
                                          { color: "#484848", size: 20 }
                                        ),
                                      }),
                                      Object(g.jsx)(m.default, {
                                        style: {
                                          fontSize: 20,
                                          paddingHorizontal: 5,
                                          fontWeight: "400",
                                        },
                                        children: t.count,
                                      }),
                                      Object(g.jsx)(v.default, {
                                        onPress: function () {
                                          l(t.id, "minus");
                                        },
                                        children: Object(g.jsx)(
                                          x.MinusCircleIcon,
                                          { color: "#484848", size: 20 }
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(g.jsx)(u.default, {
                            style: {
                              height: 2,
                              width: "70%",
                              alignSelf: "center",
                              backgroundColor: "#E0E0E0",
                            },
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
              Object(g.jsxs)(u.default, {
                style: { margin: 20 },
                children: [
                  Object(g.jsx)(m.default, {
                    style: {
                      fontSize: 16,
                      color: "#484848",
                      fontWeight: "600",
                    },
                    children: "Bill Details",
                  }),
                  Object(g.jsxs)(u.default, {
                    style: { margin: 20 },
                    children: [
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                        },
                        children: [
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "Amount",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "\u20b94563",
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "GST",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "453",
                          }),
                        ],
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "Discount",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "-153",
                          }),
                        ],
                      }),
                      Object(g.jsx)(u.default, {
                        style: {
                          height: 2,
                          width: "70%",
                          alignSelf: "center",
                          backgroundColor: "#E0E0E0",
                          marginTop: 10,
                        },
                      }),
                      Object(g.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 16,
                              color: "#484848",
                              fontWeight: "600",
                            },
                            children: "Total Amount",
                          }),
                          Object(g.jsx)(m.default, {
                            style: {
                              fontSize: 16,
                              color: "#484848",
                              fontWeight: "600",
                            },
                            children: "4853",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsx)(u.default, {
                    style: {
                      width: "70%",
                      height: 35,
                      backgroundColor: "#0D4C92",
                      justifyContent: "center",
                      alignSelf: "center",
                    },
                    children: Object(g.jsx)(m.default, {
                      style: {
                        alignSelf: "center",
                        color: "white",
                        fontWeight: "600",
                      },
                      children: "Proceed to Pay",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        bi = (l.default.create({}), i(523)),
        yi = i(204),
        mi = Object(b.default)(),
        vi = function () {
          return Object(g.jsxs)(mi.Navigator, {
            children: [
              Object(g.jsx)(mi.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "CartList",
                component: ui,
              }),
              Object(g.jsx)(mi.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "details",
                component: $e,
              }),
              Object(g.jsx)(mi.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "ebookscreen",
                component: qt,
              }),
            ],
          });
        },
        xi = Object(b.default)(),
        Oi = function () {
          return Object(g.jsx)(xi.Navigator, {
            children: Object(g.jsx)(xi.Screen, {
              options: {
                headerShown: !1,
                statusBarColor: "white",
                statusBarStyle: "dark",
              },
              name: "profile",
              component: at,
            }),
          });
        },
        wi = Object(ai.default)();
      function Si() {
        return Object(g.jsxs)(wi.Navigator, {
          children: [
            Object(g.jsx)(wi.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(g.jsx)(bi.default, {
                    name: "home",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Home",
              component: zi,
            }),
            Object(g.jsx)(wi.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(g.jsx)(bi.default, {
                    name: "shoppingcart",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Cart",
              component: vi,
            }),
            Object(g.jsx)(wi.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(g.jsx)(yi.default, {
                    name: "favorite-border",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Payment",
              component: ji,
            }),
            Object(g.jsx)(wi.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(g.jsx)(bi.default, {
                    name: "user",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "profile",
              component: Oi,
            }),
          ],
        });
      }
      var _i = Object(b.default)(),
        Ci = function () {
          return Object(g.jsxs)(_i.Navigator, {
            children: [
              Object(g.jsx)(_i.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "login",
                component: Jt,
              }),
              Object(g.jsx)(_i.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "conformPinScreen",
                component: ei,
              }),
              Object(g.jsx)(_i.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "conformForgotPin",
                component: ii,
              }),
              Object(g.jsx)(_i.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "Enter Your Pin",
                component: ni,
              }),
              Object(g.jsx)(_i.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "app",
                component: Si,
              }),
            ],
          });
        },
        ki = Object(b.default)(),
        zi = function () {
          return Object(g.jsxs)(ki.Navigator, {
            children: [
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "main",
                component: He,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "models",
                component: Fe,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "All Cars",
                component: Fe,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Arena",
                component: Fe,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Nexa",
                component: Fe,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "varients",
                component: qe,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "details",
                component: $e,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "editProfile",
                component: Wt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Used Cars",
                component: kt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "searchCar",
                component: Dt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "UsedCarForm",
                component: Pt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "ebookscreen",
                component: qt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "usedCarModel",
                component: It,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "thankyou",
                component: lt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Insurance",
                component: ct,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Service",
                component: vt,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "insuranceScreen",
                component: ht,
              }),
              Object(g.jsx)(ki.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "AuthNav",
                component: Jt,
              }),
            ],
          });
        },
        Ri = we.createURL("/");
      (t.default = function () {
        var e = Object(d.useState)({}),
          t = o()(e, 2),
          i = (t[0], t[1]),
          r = Object(d.useState)(!1),
          a = o()(r, 2),
          l = a[0],
          s = a[1];
        Object(d.useEffect)(function () {
          h();
        }, []);
        var u = { prefixes: [Ri] },
          h = (function () {
            var e = n()(function* () {
              try {
                var e = yield w.default.getItem("userCredential");
                if (null !== e) {
                  var t = JSON.parse(e);
                  console.log(t), i(t), f(t);
                }
              } catch (r) {
                console.log(r);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          f = (function () {
            var e = n()(function* (e) {
              var t = e.phone,
                i = e.password;
              if (!(yield oe({ phone: t, password: i })).ok)
                return console.log("Something Went wrong...");
              s(!0);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(g.jsx)(c.default, {
          linking: u,
          children: l ? Object(g.jsx)(Si, {}) : Object(g.jsx)(Ci, {}),
        });
      }),
        l.default.create({});
    },
    349: function (e, t, i) {
      e.exports = i(522);
    },
    415: function (e, t) {},
    426: function (e, t, i) {
      e.exports = i.p + "static/media/profile_img.74b452e4.jpeg";
    },
    427: function (e, t) {},
    428: function (e, t, i) {
      e.exports = i.p + "static/media/insurance.08ccf5d9.jpeg";
    },
    429: function (e, t, i) {
      e.exports = i.p + "static/media/lineart.532f5f57.jpeg";
    },
    502: function (e, t, i) {
      e.exports = i.p + "static/media/Noimage.026ef1a4.png";
    },
    503: function (e, t, i) {
      e.exports = i.p + "static/media/no_record.6ad77992.jpg";
    },
    504: function (e, t, i) {
      e.exports = i.p + "static/media/index.e1151974.png";
    },
  },
  [[349, 1, 2]],
]);
//# sourceMappingURL=app.f61e7ac0.chunk.js.map
