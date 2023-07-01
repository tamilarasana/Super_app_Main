(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    120: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec1_1.9126c727.jpeg";
    },
    151: function (e, t, n) {
      e.exports = n.p + "static/media/image 37.ab102466.png";
    },
    198: function (e, t, n) {
      e.exports = n.p + "static/media/image 39.e1079211.png";
    },
    255: function (e, t, n) {
      e.exports = n.p + "static/media/image 38.615c6036.png";
    },
    256: function (e, t, n) {
      e.exports = n.p + "static/media/loginBg.d01d7323.jpeg";
    },
    257: function (e, t, n) {
      e.exports = n.p + "static/media/pin.d8438664.png";
    },
    330: function (e, t, n) {
      e.exports = n.p + "static/media/AddressBook.31d6cfe0.bin";
    },
    341: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(24),
        i = n.n(r),
        o = n(9),
        a = n.n(o),
        l = n(8),
        c = n(0),
        s = n.n(c),
        d = n(559),
        u = n(5),
        f = n(22),
        h = n(99),
        j = n(3),
        g = function (e) {
          var t = e.children;
          return Object(j.jsxs)(u.default, {
            style: b.ScreenWrapper,
            children: [Object(j.jsx)(h.default, { hidden: !1 }), t],
          });
        },
        b = l.default.create({
          ScreenWrapper: {
            flex: 1,
            paddingTop: "ios" === f.default.OS ? 30 : 10,
            paddingHorizontal: 8,
            backgroundColor: "white",
            minHeight: "100%",
          },
        }),
        x = n(553),
        y = n(39),
        p = n(7),
        m = n(19),
        O = n(38),
        w = n(36),
        S = n(75),
        C = [
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
        v = function (e) {
          var t = e.navigation,
            n = Object(c.useState)(C[0]),
            r = a()(n, 2),
            i = r[0],
            o = r[1],
            l = 0;
          return (
            Object(c.useEffect)(function () {
              var e = setInterval(function () {
                o(C[l]), (l = (l + 1) % C.length);
              }, 2e3);
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(j.jsxs)(u.default, {
              style: k.searchCont,
              children: [
                Object(j.jsxs)(m.default, {
                  style: k.intoch,
                  onPress: function () {
                    t.navigate("searchCar");
                  },
                  children: [
                    Object(j.jsx)(O.MagnifyingGlassIcon, {
                      size: 25,
                      color: "#0D4C92",
                    }),
                    Object(j.jsx)(p.default, {
                      placeholderTextColor: "grey",
                      placeholder: 'Searh  "Your Car"',
                      style: k.Textbar,
                      children: i,
                    }),
                  ],
                }),
                Object(j.jsxs)(u.default, {
                  style: k.micro,
                  children: [
                    Object(j.jsx)(u.default, { style: k.verticalBar }),
                    Object(j.jsx)(w.MicrophoneIcon, {
                      size: 20,
                      color: "#0D4C92",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        k = l.default.create({
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
        z =
          (l.default.create({ btnCont: {}, text: { borderWidth: 0.8 } }),
          "#677987"),
        I = "#2F4858",
        R = "#fff",
        W = "green",
        T = "#000",
        B = "black",
        D = "rgba(19,18,18,0.72)",
        P = function (e) {
          return Object(j.jsx)(u.default, {
            style: V.container,
            children: Object(j.jsx)(p.default, {
              style: V.text,
              children:
                "Arena" == e.text
                  ? "Arena World"
                  : "Nexa" == e.text
                  ? "Nexa Lifestyle"
                  : e.text,
            }),
          });
        },
        V = l.default.create({
          container: {
            paddingVertical: 10,
            justifyContent: "flex-start",
            padding: 10,
          },
          text: { fontSize: 15, fontWeight: "700", color: I },
        }),
        E = n(27),
        A = n(25);
      function L(e) {
        var t = e.toString();
        if (t.length > 3) {
          for (var n = "", r = 0, i = t.length - 1; i >= 0; i--)
            (n += t[i]),
              i < t.length - 1 && i > 0 && ++r % 2 === 0 && (n += ",");
          t = "";
          for (var o = n.length - 1; o >= 0; o--) t += n[o];
          return t;
        }
        return t;
      }
      var H = function (e) {
          var t = e.data,
            n = e.navigation;
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)(E.default, {
              data: t,
              keyExtractor: function (e, t) {
                return t;
              },
              showsHorizontalScrollIndicator: !1,
              horizontal: !0,
              renderItem: function (e) {
                var t = e.item;
                return Object(j.jsx)(u.default, {
                  style: _.containerWrapper,
                  children: Object(j.jsxs)(m.default, {
                    underlayColor: "orange",
                    onPress: function () {
                      return n.navigate(t[0].page_navigation, {
                        var_id: t[0].id,
                        item_id: t[0].itemlist,
                      });
                    },
                    style: _.cardContainer,
                    children: [
                      Object(j.jsx)(u.default, {
                        style: { width: 110, height: 100 },
                        children: Object(j.jsx)(A.default, {
                          source: t[0].images[0],
                          style: _.img,
                        }),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: _.TextCont,
                        children: [
                          Object(j.jsx)(p.default, {
                            style: _.imgText,
                            children: t[0].title,
                          }),
                          Object(j.jsx)(p.default, {
                            style: _.desc,
                            children: "Ex-showroom Price /-",
                          }),
                          Object(j.jsxs)(p.default, {
                            style: _.offer,
                            children: [L(t[0].price), " /-"],
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
        _ = l.default.create({
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
          desc: { fontSize: 13, color: z, marginTop: 10 },
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
        M = n(282),
        F = Object(M.create)({
          baseURL: "http://superapi.kalyanicrm.com/",
          withCredentials: !1,
        }),
        N =
          (n(397),
          function (e) {
            return F.get("showcases/get_itemlist" + e);
          }),
        Y = function (e) {
          return F.get("showcases/get_itemdesc" + e);
        },
        U = function () {
          return F.get("showcases/get_category");
        },
        G = function (e) {
          return F.get("showcases/get_itemlist" + e);
        },
        J = function (e) {
          return F.get("showcases/get_dist_itemdesc" + e);
        },
        K = function (e) {
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
        Z = function (e) {
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
        q = function () {
          return F.get("promotions/get_banners");
        },
        $ = function (e) {
          return F.post("promotions/get_featured_item/", e);
        },
        Q = function (e) {
          return F.post("utilities/make_wishlist/", e);
        },
        ee = function (e) {
          return F.put("utilities/make_wishlist/" + e + "/");
        },
        te = function (e) {
          return F.get("utilities/make_wishlist/" + e);
        },
        ne = function (e) {
          return F.post("utilities/get_user/", e);
        },
        re = function (e) {
          return F.post("auth/users/", e);
        },
        ie = function (e) {
          return F.post("utilities/profile_detail/", e);
        },
        oe = function (e) {
          return F.post("utilities/login/", e);
        },
        ae = function (e) {
          return F.post("showcases/search_item/", e);
        },
        le = function (e) {
          var t = e.title,
            n = e.onPress,
            r = e.direction;
          return Object(j.jsxs)(m.default, {
            style: ce.container,
            onPress: n,
            children: [
              Object(j.jsx)(p.default, { style: ce.title, children: t }),
              "up" === r
                ? Object(j.jsx)(w.ChevronDoubleUpIcon, {
                    size: 15,
                    color: "#0D4C92",
                  })
                : Object(j.jsx)(w.ChevronDoubleDownIcon, {
                    size: 15,
                    color: "#0D4C92",
                  }),
            ],
          });
        },
        ce = l.default.create({
          container: {
            width: "97%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            padding: 6,
            alignSelf: "center",
            borderRadius: 8,
            borderColor: z,
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            marginTop: 10,
          },
          title: { fontSize: 12, paddingRight: 5, fontWeight: "500", color: z },
        }),
        se = function (e) {
          var t = e.navigation,
            n = e.data,
            r = Object(c.useState)([]),
            i = a()(r, 2),
            o = i[0],
            l = i[1];
          return (
            Object(c.useEffect)(
              function () {
                l(n);
              },
              [n]
            ),
            Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsx)(E.default, {
                  data: o,
                  numColumns: 3,
                  keyExtractor: function (e) {
                    return e.id;
                  },
                  renderItem: function (e) {
                    var n = e.item;
                    return Object(j.jsxs)(m.default, {
                      style: de.container,
                      onPress: function () {
                        return t.navigate(n.page_navigation, { id: n.id });
                      },
                      children: [
                        Object(j.jsx)(u.default, {
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
                          children: Object(j.jsx)(A.default, {
                            source: n.images[0],
                            style: de.img,
                          }),
                        }),
                        Object(j.jsx)(p.default, {
                          style: de.title,
                          children: n.name,
                        }),
                      ],
                    });
                  },
                }),
                Object(j.jsx)(le, {
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
        de = l.default.create({
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
          title: { color: I, fontWeight: "500", fontSize: 12 },
        }),
        ue = function (e) {
          var t = e.data,
            n = e.navigation;
          return Object(j.jsx)(E.default, {
            horizontal: !0,
            data: t,
            showsHorizontalScrollIndicator: !1,
            keyExtractor: function (e, t) {
              return t;
            },
            renderItem: function (e) {
              var t = e.item;
              return Object(j.jsx)(u.default, {
                style: fe.containerWrapper,
                children: Object(j.jsxs)(m.default, {
                  style: fe.container,
                  onPress: function () {
                    return n.navigate(t[0].page_navigation, {
                      var_id: t[0].id,
                      item_id: t[0].itemlist,
                    });
                  },
                  children: [
                    Object(j.jsx)(A.default, {
                      source: t[0].images[0],
                      style: fe.img,
                    }),
                    Object(j.jsx)(u.default, {
                      style: fe.subCont,
                      children: Object(j.jsx)(p.default, {
                        style: fe.title,
                        children: t[0].title,
                      }),
                    }),
                    Object(j.jsxs)(u.default, {
                      style: { paddingBottom: 15, paddingLeft: 10 },
                      children: [
                        Object(j.jsx)(p.default, {
                          style: fe.desc,
                          children: "Ex-showroom Price /-",
                        }),
                        Object(j.jsxs)(p.default, {
                          style: fe.offer,
                          children: [L(t[0].price), " /-"],
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
          desc: { fontSize: 13, color: z, marginTop: 10 },
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
            backgroundColor: W,
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
            color: z,
          },
          title: { fontSize: 16, fontWeight: "600", color: I },
        }),
        he =
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
              backgroundColor: W,
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
              color: z,
            },
            title: { fontSize: 16, fontWeight: "600", color: I },
          }),
          function (e) {
            var t = e.navigation,
              n = e.data,
              r = Object(c.useState)([]),
              i = a()(r, 2),
              o = i[0],
              l = i[1];
            return (
              Object(c.useEffect)(
                function () {
                  l(n);
                },
                [n]
              ),
              Object(j.jsx)(j.Fragment, {
                children: o
                  ? Object(j.jsx)(E.default, {
                      horizontal: !0,
                      showsHorizontalScrollIndicator: !1,
                      data: o,
                      keyExtractor: function (e) {
                        return e.id;
                      },
                      renderItem: function (e) {
                        var n = e.item;
                        return Object(j.jsx)(m.default, {
                          style: { padding: 2 },
                          onPress: function (e) {
                            return (function (e, n) {
                              t.navigate(e.target.textContent, {
                                id: n,
                                ModelId: n,
                              });
                            })(e, n.id);
                          },
                          children: Object(j.jsx)(u.default, {
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
                            children: Object(j.jsx)(p.default, {
                              style: {
                                alignSelf: "center",
                                marginTop: 2,
                                color: I,
                                fontSize: 12,
                                fontWeight: "600",
                              },
                              children: n.title,
                            }),
                          }),
                        });
                      },
                    })
                  : null,
              })
            );
          }),
        je = n(17),
        ge = n(31),
        be = n(111),
        xe = n.n(be),
        ye = n(283),
        pe = function () {
          return Object(j.jsx)(u.default, {
            style: { flex: 1, justifyContent: "center" },
            children: Object(j.jsx)(ye.InstagramLoader, { active: !0 }),
          });
        },
        me = (l.default.create({}), ge.default.get("window").width - 20),
        Oe = function (e) {
          var t = e.banner,
            n = Object(c.useState)(new je.default.Value(-200)),
            r = a()(n, 1)[0],
            i = Object(c.useState)(new je.default.Value(0)),
            o = a()(i, 1)[0],
            l = Object(c.useState)([]),
            s = a()(l, 2),
            d = s[0],
            f = s[1];
          Object(c.useEffect)(function () {
            h();
            var e = je.default.timing(o, {
                toValue: 1,
                duration: 1e3,
                useNativeDriver: !0,
              }),
              t = je.default.timing(r, { toValue: 0, duration: 1200 });
            je.default.parallel([e, t]).start();
          }, []);
          var h = function () {
            var e = t.filter(function (e) {
              return "text" === e.promotion_type;
            });
            f(e);
          };
          return Object(j.jsx)(j.Fragment, {
            children:
              d.length > 0
                ? Object(j.jsx)(je.default.View, {
                    style: { opacity: o, transform: [{ translateX: r }] },
                    children: Object(j.jsx)(xe.a, {
                      autoplay: !0,
                      autoplayTimeout: 4300,
                      loop: !0,
                      index: 0,
                      pageSize: me,
                      showsPageIndicator: !1,
                      children: d.map(function (e, t) {
                        return Object(j.jsx)(
                          u.default,
                          {
                            style: { padding: 2 },
                            children: Object(j.jsxs)(u.default, {
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
                                Object(j.jsx)(A.default, {
                                  source: {
                                    uri:
                                      "http://superapi.kalyanicrm.com" +
                                      e.image,
                                  },
                                  style: { height: 70, width: 70 },
                                }),
                                Object(j.jsxs)(u.default, {
                                  style: { flex: 1, width: "90%", padding: 5 },
                                  children: [
                                    Object(j.jsx)(p.default, {
                                      style: {
                                        fontWeight: "700",
                                        marginLeft: 10,
                                        fontSize: 16,
                                        paddingVertical: 5,
                                        color: I,
                                      },
                                      children: e.title,
                                    }),
                                    Object(j.jsx)(p.default, {
                                      style: {
                                        fontWeight: "600",
                                        marginLeft: 10,
                                        fontSize: 12,
                                        color: z,
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
                : Object(j.jsx)(pe, {}),
          });
        },
        we = n(177),
        Se = function (e) {
          e.navigation;
          return Object(j.jsxs)(u.default, {
            style: Ce.Header,
            children: [
              Object(j.jsx)(w.MapPinIcon, { size: 30, color: "#0D4C92" }),
              Object(j.jsxs)(u.default, {
                style: Ce.addressCont,
                children: [
                  Object(j.jsx)(p.default, {
                    style: Ce.headerText,
                    children: "Home",
                  }),
                  Object(j.jsx)(p.default, {
                    style: Ce.headerAddress,
                    children: "KALYANI MOTORS PVT LTD, Pantara",
                  }),
                ],
              }),
              Object(j.jsxs)(u.default, {
                style: Ce.iconCont,
                children: [
                  Object(j.jsx)(m.default, {
                    children: Object(j.jsx)(w.WalletIcon, {
                      size: 30,
                      color: "#0D4C92",
                    }),
                  }),
                  Object(j.jsx)(m.default, {
                    onPress: function () {
                      return we.openURL("activity_login://LoginActivity");
                    },
                    children: Object(j.jsx)(w.UserCircleIcon, {
                      size: 30,
                      color: "#eee",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ce = l.default.create({
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
          headerAddress: { fontSize: 12, color: z },
          headerText: { fontSize: 16, fontWeight: "600", color: I },
        }),
        ve = n(10),
        ke = n.n(ve),
        ze = n(11),
        Ie = n.n(ze),
        Re = n(15),
        We = n.n(Re),
        Te = n(16),
        Be = n.n(Te),
        De = n(6),
        Pe = n.n(De);
      function Ve(e) {
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
          var n,
            r = Pe()(e);
          if (t) {
            var i = Pe()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Be()(this, n);
        };
      }
      var Ee = ge.default.get("window").width - 20,
        Ae = (function (e) {
          We()(n, e);
          var t = Ve(n);
          function n(e) {
            var r;
            return (
              ke()(this, n),
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
            Ie()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getFilteredData();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(u.default, {
                    style: Le.container,
                    children: this.state.images
                      ? Object(j.jsx)(xe.a, {
                          autoplay: !0,
                          autoplayTimeout: 3e3,
                          loop: !0,
                          index: 0,
                          pageSize: Ee,
                          showsPageIndicator: !1,
                          useNativeDriver: !0,
                          children: this.state.images.map(function (e, t) {
                            return Object(j.jsx)(
                              u.default,
                              {
                                children: Object(j.jsx)(A.default, {
                                  style: {
                                    width: Ee,
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
                      : Object(j.jsx)(j.Fragment, {}),
                  });
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        Le = l.default.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
          },
        }),
        He = function (e) {
          var t = e.navigation,
            n = (e.route, Object(c.useState)(!1)),
            r = a()(n, 2),
            o = r[0],
            l = r[1],
            s = Object(c.useState)([]),
            d = a()(s, 2),
            f = d[0],
            h = d[1],
            b = Object(c.useState)([]),
            x = a()(b, 2),
            p = x[0],
            m = x[1],
            O = Object(c.useState)([]),
            w = a()(O, 2),
            S = w[0],
            C = w[1],
            k = Object(c.useState)([]),
            z = a()(k, 2),
            I = z[0],
            R = z[1],
            W = Object(c.useState)([]),
            T = a()(W, 2),
            B = T[0],
            D = T[1],
            V = Object(c.useState)([]),
            E = a()(V, 2),
            A = E[0],
            L = E[1];
          Object(c.useEffect)(
            function () {
              _();
            },
            [o]
          );
          var _ = function () {
              M(),
                F(1),
                N({ title: "Primary" }),
                Y({ title: "Secondary" }),
                J({ title: "Focused" }),
                K();
            },
            M = (function () {
              var e = i()(function* () {
                var e = yield U();
                m(e.data);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = i()(function* (e) {
                var t = yield G("/" + e);
                h(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            N = (function () {
              var e = i()(function* (e) {
                var t = yield $(e);
                C(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Y = (function () {
              var e = i()(function* (e) {
                var t = yield $(e);
                R(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            J = (function () {
              var e = i()(function* (e) {
                var t = yield $(e);
                D(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            K = (function () {
              var e = i()(function* (e) {
                var t = yield q(e);
                L(t.data), l(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(j.jsx)(g, {
            children: Object(j.jsxs)(y.default, {
              showsVerticalScrollIndicator: !1,
              style: { backgroundColor: "white", flex: 1 },
              children: [
                Object(j.jsx)(Se, {
                  navigation: function (e) {
                    return t(e);
                  },
                }),
                Object(j.jsx)(v, { navigation: t }),
                o
                  ? Object(j.jsxs)(u.default, {
                      children: [
                        Object(j.jsx)(he, { data: p, navigation: t }),
                        Object(j.jsx)(u.default, {
                          children: Object(j.jsx)(Oe, { banner: A }),
                        }),
                        Object(j.jsx)(u.default, {
                          style: { alignItems: "center" },
                          children: Object(j.jsx)(Ae, { banner: A }),
                        }),
                        Object(j.jsx)(P, {
                          text: "The Perfect Fit for Your Life Style ",
                        }),
                        Object(j.jsx)(H, { data: B, navigation: t }),
                        Object(j.jsx)(P, { text: "Cars That Move Your Mind" }),
                        Object(j.jsx)(se, { navigation: t, data: f }),
                        Object(j.jsx)(P, {
                          text: "Our Wide Range Of Popular Cars ",
                        }),
                        Object(j.jsx)(H, { data: S, navigation: t }),
                        Object(j.jsx)(P, {
                          text: "Discover the joy of driving",
                        }),
                        Object(j.jsx)(ue, { data: I, navigation: t }),
                      ],
                    })
                  : Object(j.jsxs)(j.Fragment, {
                      children: [
                        Object(j.jsx)(pe, {}),
                        Object(j.jsx)(pe, {}),
                        Object(j.jsx)(pe, {}),
                      ],
                    }),
              ],
            }),
          });
        },
        _e =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              n = e.route,
              r = Object(c.useState)([]),
              o = a()(r, 2),
              l = o[0],
              s = o[1],
              d = Object(c.useState)(!0),
              f = a()(d, 2),
              h = f[0],
              g = f[1],
              b = n.params.id;
            n.params.ModelId;
            Object(c.useEffect)(function () {
              x("/" + b);
            }, []);
            var x = (function () {
              var e = i()(function* (e) {
                var t = yield N(e);
                s(t.data), g(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return Object(j.jsx)(j.Fragment, {
              children: h
                ? Object(j.jsx)(pe, {})
                : Object(j.jsx)(u.default, {
                    style: {
                      flex: 1,
                      width: "100%",
                      justifyContent: "space-around",
                    },
                    children: Object(j.jsx)(E.default, {
                      data: l,
                      numColumns: 2,
                      keyExtractor: function (e) {
                        return e.id;
                      },
                      showsVerticalScrollIndicator: !1,
                      renderItem: function (e) {
                        var n = e.item;
                        return Object(j.jsxs)(m.default, {
                          onPress: function (e) {
                            return (function (e) {
                              t.navigate(e.page_navigation, { id: e.id });
                            })(n);
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
                            Object(j.jsx)(A.default, {
                              source: { uri: n.images[0] },
                              style: {
                                width: "100%",
                                height: 150,
                                resizeMode: "contain",
                              },
                            }),
                            Object(j.jsx)(u.default, {
                              style: {
                                padding: 5,
                                alignItems: "center",
                                marginBottom: 5,
                              },
                              children: Object(j.jsx)(p.default, {
                                style: { fontWeight: "500", fontSize: 13 },
                                children: n.title,
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                  }),
            });
          }),
        Me = function (e) {
          var t = e.navigation,
            n = e.route,
            r = Object(c.useState)([]),
            i = a()(r, 2);
          i[0], i[1];
          return Object(j.jsxs)(g, {
            children: [
              Object(j.jsx)(Se, {}),
              Object(j.jsx)(v, { navigation: t }),
              Object(j.jsx)(P, { text: n.name }),
              Object(j.jsx)(y.default, {
                showsVerticalScrollIndicator: !1,
                style: { backgroundColor: "#fff", flex: 1 },
                children: Object(j.jsx)(_e, {
                  navigation: t,
                  heading: n.name,
                  route: n,
                }),
              }),
            ],
          });
        },
        Fe =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              n = e.id,
              r = Object(c.useState)([]),
              o = a()(r, 2),
              l = o[0],
              s = o[1],
              d = Object(c.useState)(!0),
              u = a()(d, 2),
              f = u[0],
              h = u[1];
            console.log(n),
              Object(c.useEffect)(function () {
                b(n);
              }, []);
            var g = window.location.search,
              b =
                (new URLSearchParams(g).get("ModelId"),
                (function () {
                  var e = i()(function* () {
                    var e = yield J("/" + n);
                    s(e.data), h(!1);
                  });
                  return function () {
                    return e.apply(this, arguments);
                  };
                })());
            return Object(j.jsx)(j.Fragment, {
              children: f
                ? Object(j.jsx)(pe, {})
                : Object(j.jsx)(E.default, {
                    data: l,
                    keyExtractor: function (e) {
                      return e.id.toString();
                    },
                    numColumns: 2,
                    showsVerticalScrollIndicator: !1,
                    renderItem: function (e) {
                      var r = e.item;
                      e.index;
                      return Object(j.jsxs)(m.default, {
                        style: Ne.container,
                        onPress: function () {
                          var e;
                          (e = r.id),
                            t.navigate("details", { var_id: e, item_id: n });
                        },
                        children: [
                          Object(j.jsx)(A.default, {
                            source: { uri: r.images[0] },
                            style: Ne.img,
                          }),
                          Object(j.jsx)(p.default, {
                            style: Ne.Heading,
                            children: r.title,
                          }),
                        ],
                      });
                    },
                  }),
            });
          }),
        Ne = l.default.create({
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
        Ye = function (e) {
          var t = e.navigation,
            n = e.route;
          return Object(j.jsxs)(g, {
            children: [
              Object(j.jsx)(Se, {}),
              Object(j.jsx)(v, { navigation: t }),
              Object(j.jsx)(P, { text: "Modified for you" }),
              Object(j.jsx)(y.default, {
                showsVerticalScrollIndicator: !1,
                style: { backgroundColor: "#fff", flex: 1 },
                children: Object(j.jsx)(Fe, { navigation: t, id: n.params.id }),
              }),
            ],
          });
        },
        Ue = (l.default.create({}), n(57)),
        Ge = n(126),
        Je = n(82),
        Ke = n(318),
        Xe = n(138),
        Ze = n.n(Xe),
        qe = n(561),
        $e = function (e) {
          var t = e.navigation,
            n = e.route,
            r = Object(c.useState)(0),
            o = a()(r, 2),
            l = o[0],
            s = o[1],
            d = Object(c.useState)("#d0e25b"),
            f = a()(d, 2),
            h = (f[0], f[1]),
            b = Object(c.useState)([]),
            x = a()(b, 2),
            O = x[0],
            S = x[1],
            C = Object(c.useState)(null),
            k = a()(C, 2),
            T = k[0],
            D = k[1],
            V = Object(c.useState)([]),
            H = a()(V, 2),
            _ = H[0],
            M = H[1],
            F = Object(c.useState)([]),
            N = a()(F, 2),
            U = N[0],
            G = N[1],
            X = Object(c.useState)(!1),
            Z = a()(X, 2),
            q = Z[0],
            $ = Z[1],
            te = Object(c.useState)(0),
            ne = a()(te, 2),
            re = (ne[0], ne[1]),
            ie = Object(c.useState)([]),
            oe = a()(ie, 2),
            ae = oe[0],
            ce = oe[1],
            se = Object(c.useState)(0),
            de = a()(se, 2),
            ue = (de[0], de[1]),
            fe = Object(c.useState)(!1),
            he = a()(fe, 2),
            je = he[0],
            ge = he[1],
            be = Object(c.useState)(9.5),
            xe = a()(be, 2),
            ye = xe[0],
            pe = xe[1],
            me = Object(c.useState)(60),
            Oe = a()(me, 2),
            we = Oe[0],
            Ce = Oe[1],
            ve = Object(c.useState)(0),
            ke = a()(ve, 2),
            ze = ke[0],
            Ie = ke[1],
            Re = Object(c.useState)(0),
            We = a()(Re, 2),
            Te = We[0],
            Be = We[1],
            De = Object(c.useState)(0),
            Pe = a()(De, 2),
            Ve = Pe[0],
            Ee = Pe[1],
            Ae = Object(c.useState)(1e5),
            Le = a()(Ae, 2),
            He = Le[0],
            _e = Le[1],
            Me = Object(c.useState)(0),
            Fe = a()(Me, 2),
            Ne = Fe[0],
            Ye = Fe[1],
            Xe = Object(c.useState)(0),
            $e = a()(Xe, 2),
            et = $e[0],
            tt = ($e[1], Object(c.useState)(!1)),
            nt = a()(tt, 2),
            rt = nt[0],
            it = nt[1],
            ot = Object(c.useState)({}),
            at = a()(ot, 2),
            lt = at[0],
            ct = at[1],
            st = n.params.var_id;
          Object(c.useEffect)(function () {
            ut(st), ft(n.params.item_id);
          }, []),
            Object(c.useEffect)(
              function () {
                dt();
              },
              [He, Te, we, ye, Ve, et]
            );
          var dt = function () {
              var e = ye / 100,
                t = Ve - He;
              Be(t), _e(Ve - t);
              var n = t * ((e / 12) * we) + t,
                r = n / we;
              Ye(n), Ie(r);
            },
            ut = (function () {
              var e = i()(function* (e) {
                var t = yield Y("/" + e);
                M(t.data),
                  ht(t.data[0].title),
                  G(t.data[0].spec.slice(0, 8)),
                  $(!0),
                  Ee(t.data[0].price);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ft = (function () {
              var e = i()(function* (e) {
                var t = yield J("/" + e);
                ce(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ht = (function () {
              var e = i()(function* (e) {
                var t = yield K({ title: e });
                S(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            jt = (function () {
              var e = i()(function* (e) {
                var t = yield Q({ profile: 1, item: e });
                ct(t.data), it(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            gt = (function () {
              var e = i()(function* (e) {
                yield ee(e);
                it(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(j.jsx)(g, {
            children: Object(j.jsxs)(y.default, {
              showsVerticalScrollIndicator: !1,
              style: { backgroundColor: "#fff", flex: 1 },
              children: [
                Object(j.jsx)(Se, {}),
                Object(j.jsx)(v, { navigation: t }),
                0 != _.length
                  ? Object(j.jsxs)(j.Fragment, {
                      children: [
                        Object(j.jsx)(P, { text: _[0].subtitle }),
                        Object(j.jsxs)(u.default, {
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
                            Object(j.jsx)(A.default, {
                              source: { uri: _[0].images[l] },
                              style: {
                                height: 200,
                                width: "100%",
                                marginVertical: 7,
                                borderRadius: 12,
                              },
                            }),
                            Object(j.jsx)(u.default, {
                              style: {},
                              children: Object(j.jsx)(E.default, {
                                data: _[0].images,
                                keyExtractor: function (e) {
                                  return e;
                                },
                                horizontal: !0,
                                showsHorizontalScrollIndicator: !1,
                                renderItem: function (e) {
                                  var t = e.item,
                                    n = e.index;
                                  return Object(j.jsx)(m.default, {
                                    style: { margin: 3, width: 35, height: 23 },
                                    onPress: function () {
                                      s(n);
                                    },
                                    children: Object(j.jsx)(A.default, {
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
                            Object(j.jsx)(Ge.default, {
                              children: Object(j.jsx)(Je.BottomSheet, {
                                visible: 1 === T,
                                onBackButtonPress: function () {
                                  D(null);
                                },
                                onBackdropPress: function () {
                                  D(null);
                                },
                                children: Object(j.jsxs)(u.default, {
                                  style: Qe.bottomNavigationView,
                                  children: [
                                    Object(j.jsx)(u.default, {
                                      style: {
                                        shadowColor: "gray",
                                        textAlign: "center",
                                        shadowOpacity: 0.26,
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowRadius: 5,
                                        elevation: 1,
                                        width: "100%",
                                      },
                                      children: Object(j.jsx)(p.default, {
                                        style: {
                                          fontSize: 20,
                                          fontWeight: "600",
                                          padding: 7,
                                        },
                                        children: "Please Choose the Color",
                                      }),
                                    }),
                                    Object(j.jsx)(E.default, {
                                      showsVerticalScrollIndicator: !1,
                                      horizontal: !0,
                                      data: O,
                                      renderItem: function (e) {
                                        var t = e.item,
                                          n = e.index;
                                        return Object(j.jsxs)(m.default, {
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
                                            h(t.color),
                                              D(null),
                                              re(n),
                                              ut(t.id);
                                          },
                                          children: [
                                            Object(j.jsx)(A.default, {
                                              source: { uri: t.images[0] },
                                              style: {
                                                width: 120,
                                                height: 120,
                                                resizeMode: "contain",
                                              },
                                            }),
                                            Object(j.jsx)(p.default, {
                                              style: {
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: B,
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
                            Object(j.jsx)(Ge.default, {
                              children: Object(j.jsx)(Je.BottomSheet, {
                                visible: 2 === T,
                                onBackButtonPress: function () {
                                  D(null);
                                },
                                onBackdropPress: function () {
                                  D(null);
                                },
                                children: Object(j.jsxs)(u.default, {
                                  style: Qe.bottomNavigationView,
                                  children: [
                                    Object(j.jsx)(u.default, {
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
                                      children: Object(j.jsx)(p.default, {
                                        style: {
                                          fontSize: 20,
                                          fontWeight: "600",
                                          padding: 7,
                                        },
                                        children: "Please select Your Variant",
                                      }),
                                    }),
                                    Object(j.jsx)(E.default, {
                                      horizontal: !0,
                                      showsVerticalScrollIndicator: !1,
                                      data: ae,
                                      renderItem: function (e) {
                                        var t = e.item;
                                        return Object(j.jsxs)(m.default, {
                                          underlayColor: "orange",
                                          onPress: function () {
                                            ue(t.id), D(null), ut(t.id);
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
                                            Object(j.jsx)(A.default, {
                                              source: { uri: t.images[0] },
                                              style: {
                                                width: 150,
                                                height: 150,
                                                resizeMode: "contain",
                                              },
                                            }),
                                            Object(j.jsx)(p.default, {
                                              style: {
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: B,
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
                            Object(j.jsxs)(m.default, {
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
                                D(1);
                              },
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 12,
                                    fontWeight: "700",
                                    flex: 1,
                                    color: "#000",
                                  },
                                  children: _[0].color,
                                }),
                                Object(j.jsxs)(u.default, {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(j.jsx)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        backgroundColor: "#abe",
                                        paddingHorizontal: 10,
                                        borderRadius: 6,
                                      },
                                      children: Object(j.jsx)(p.default, {
                                        style: {
                                          fontSize: 10,
                                          fontWeight: "600",
                                          flex: 1,
                                          color: "#000",
                                        },
                                        children: "Avalible Colors",
                                      }),
                                    }),
                                    Object(j.jsx)(w.ChevronDownIcon, {
                                      size: 20,
                                      color: "black",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(j.jsxs)(m.default, {
                              onPress: function () {
                                D(2);
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
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 12,
                                    fontWeight: "700",
                                    flex: 1,
                                    color: "#000",
                                  },
                                  children: _[0].title,
                                }),
                                Object(j.jsxs)(u.default, {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderRadius: 6,
                                    justifyContent: "space-between",
                                  },
                                  children: [
                                    Object(j.jsx)(p.default, {
                                      style: {
                                        fontSize: 10,
                                        fontWeight: "600",
                                        flex: 1,
                                        color: "#000",
                                        paddingRight: 10,
                                      },
                                      children: "Other Models",
                                    }),
                                    Object(j.jsx)(w.ChevronDownIcon, {
                                      size: 20,
                                      color: "black",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(u.default, {
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
                            Object(j.jsxs)(u.default, {
                              style: {
                                flexDirection: "row",
                                paddingVertical: 10,
                                justifyContent: "space-between:",
                                alignItems: "center",
                              },
                              children: [
                                Object(j.jsxs)(u.default, {
                                  style: { flex: 1 },
                                  children: [
                                    Object(j.jsx)(p.default, {
                                      style: {
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "green",
                                      },
                                      children: "Ex-Showroom Price",
                                    }),
                                    Object(j.jsxs)(p.default, {
                                      style: {
                                        fontSize: 22,
                                        fontWeight: "700",
                                      },
                                      children: [L(_[0].price), " /-"],
                                    }),
                                  ],
                                }),
                                Object(j.jsx)(m.default, {
                                  style: {
                                    backgroundColor: "#00D09C",
                                    padding: 10,
                                    borderRadius: 12,
                                  },
                                  onPress: function () {
                                    ge(!0);
                                  },
                                  children: Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 14,
                                      fontWeight: "600",
                                      color: "#000",
                                    },
                                    children: "EMI Calculator",
                                  }),
                                }),
                                Object(j.jsx)(Ue.default, {
                                  visible: je,
                                  transparent: !0,
                                  children: Object(j.jsx)(qe.default, {
                                    intensity: 40,
                                    tint: "light",
                                    style: {
                                      justifyContent: "center",
                                      alignSelf: "center",
                                      alignItems: "center",
                                      width: "100%",
                                      height: "100%",
                                    },
                                    children: Object(j.jsx)(u.default, {
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
                                      children: Object(j.jsxs)(u.default, {
                                        style: { padding: 10 },
                                        children: [
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                            },
                                            children: [
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  fontSize: 18,
                                                  fontWeight: "600",
                                                  color: "#00D09C",
                                                },
                                                children:
                                                  "Plan your loans smarter, with our EMI calculator",
                                              }),
                                              Object(j.jsx)(m.default, {
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
                                                  return ge(!1);
                                                },
                                                children: Object(j.jsx)(
                                                  w.XMarkIcon,
                                                  { size: 20, color: "black" }
                                                ),
                                              }),
                                            ],
                                          }),
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                            },
                                            children: [
                                              Object(j.jsxs)(u.default, {
                                                style: {
                                                  alignItems: "center",
                                                  paddingVertical: 15,
                                                  justifyContent: "center",
                                                },
                                                children: [
                                                  Object(j.jsxs)(p.default, {
                                                    style: {
                                                      fontSize: 18,
                                                      fontWeight: "700",
                                                      paddingRight: 8,
                                                      textAlign: "center",
                                                    },
                                                    children: [
                                                      "\u20b9 ",
                                                      Ne.toFixed(2),
                                                      " /-",
                                                    ],
                                                  }),
                                                  Object(j.jsxs)(p.default, {
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
                                              Object(j.jsxs)(u.default, {
                                                style: {
                                                  alignItems: "center",
                                                  paddingVertical: 15,
                                                  justifyContent: "center",
                                                  paddingRight: 10,
                                                },
                                                children: [
                                                  Object(j.jsxs)(p.default, {
                                                    style: {
                                                      fontSize: 18,
                                                      fontWeight: "600",
                                                      paddingRight: 8,
                                                      textAlign: "center",
                                                    },
                                                    children: [
                                                      "\u20b9 ",
                                                      ze.toFixed(2),
                                                      "/-",
                                                    ],
                                                  }),
                                                  Object(j.jsxs)(p.default, {
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
                                          Object(j.jsx)(u.default, {
                                            style: {
                                              marginVertical: 25,
                                              width: "90%",
                                              height: 0.5,
                                              backgroundColor: "grey",
                                              alignSelf: "center",
                                            },
                                          }),
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: "Down Payment",
                                              }),
                                              Object(j.jsxs)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: [
                                                  "\u20b9 ",
                                                  L(He),
                                                  " /-",
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(j.jsx)(Ze.a, {
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
                                            onValueChange: _e,
                                            step: 1,
                                            value: He,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: "Loan Amount",
                                              }),
                                              Object(j.jsxs)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: [
                                                  "\u20b9 ",
                                                  L(Te),
                                                  " /-",
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(j.jsx)(Ze.a, {
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
                                            onValueChange: Be,
                                            step: 1,
                                            value: Te,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: "Tenure",
                                              }),
                                              Object(j.jsxs)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: [we, " / Months"],
                                              }),
                                            ],
                                          }),
                                          Object(j.jsx)(Ze.a, {
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
                                            onValueChange: Ce,
                                            step: 1,
                                            value: we,
                                            thumbTintColor: "#F74300",
                                          }),
                                          Object(j.jsxs)(u.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              padding: 10,
                                            },
                                            children: [
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: "Interest",
                                              }),
                                              Object(j.jsxs)(p.default, {
                                                style: {
                                                  fontSize: 14,
                                                  fontWeight: "600",
                                                  color: I,
                                                },
                                                children: [ye, " %"],
                                              }),
                                            ],
                                          }),
                                          Object(j.jsx)(Ze.a, {
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
                                            onValueChange: pe,
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
                            Object(j.jsxs)(u.default, {
                              style: {
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: 10,
                              },
                              children: [
                                rt
                                  ? Object(j.jsx)(m.default, {
                                      style: {
                                        backgroundColor: "green",
                                        padding: 10,
                                        width: "49%",
                                        borderRadius: 12,
                                        textAlign: "center",
                                      },
                                      onPress: function () {
                                        return gt(lt.id);
                                      },
                                      children: Object(j.jsx)(p.default, {
                                        style: {
                                          color: "white",
                                          fontSize: 14,
                                          fontWeight: "600",
                                        },
                                        children: "Wishlist Added",
                                      }),
                                    })
                                  : Object(j.jsx)(m.default, {
                                      style: {
                                        backgroundColor: "#F74300",
                                        padding: 10,
                                        width: "49%",
                                        borderRadius: 12,
                                        textAlign: "center",
                                      },
                                      onPress: function () {
                                        return jt(_[0].id);
                                      },
                                      children: Object(j.jsx)(p.default, {
                                        style: {
                                          color: "white",
                                          fontSize: 14,
                                          fontWeight: "600",
                                        },
                                        children: "Add Wishlist",
                                      }),
                                    }),
                                Object(j.jsx)(m.default, {
                                  style: {
                                    backgroundColor: "#F74300",
                                    padding: 10,
                                    width: "49%",
                                    textAlign: "center",
                                    borderRadius: 12,
                                  },
                                  onPress: function () {
                                    return t.navigate("ebookscreen", n.params);
                                  },
                                  children: Object(j.jsx)(p.default, {
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
                            Object(j.jsxs)(u.default, {
                              style: { marginTop: 5, paddingLeft: 8 },
                              children: [
                                Object(j.jsxs)(p.default, {
                                  style: {
                                    fontSize: 20,
                                    color: I,
                                    fontWeight: "700",
                                    marginTop: 10,
                                    marginBottom: 5,
                                  },
                                  children: ["About - ", _[0].title],
                                }),
                                Object(j.jsx)(Ke.default, {
                                  numberOfLines: 3,
                                  renderTruncatedFooter: function (e) {
                                    return Object(j.jsx)(p.default, {
                                      style: { color: W, marginTop: 5 },
                                      onPress: e,
                                      children: "Read more",
                                    });
                                  },
                                  renderRevealedFooter: function (e) {
                                    return Object(j.jsx)(p.default, {
                                      style: { color: W, marginTop: 5 },
                                      onPress: e,
                                      children: "Show less",
                                    });
                                  },
                                  children: Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      color: B,
                                      fontWeight: "600",
                                      color: z,
                                    },
                                    children: _[0].description,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(u.default, {
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
                            Object(j.jsx)(p.default, {
                              style: {
                                padding: 10,
                                fontSize: 20,
                                fontWeight: "700",
                                color: I,
                              },
                              children: "Key Specifications",
                            }),
                            Object(j.jsx)(u.default, {
                              style: { width: "100%", padding: 10 },
                              children: q
                                ? Object(j.jsxs)(j.Fragment, {
                                    children: [
                                      Object(j.jsx)(E.default, {
                                        data: U,
                                        keyExtractor: function (e, t) {
                                          return t;
                                        },
                                        numColumns: 2,
                                        renderItem: function (e) {
                                          var t = e.item;
                                          return Object(j.jsxs)(u.default, {
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
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  color: "#aaa",
                                                  fontSize: 12,
                                                },
                                                children: t.item_spec,
                                              }),
                                              Object(j.jsx)(p.default, {
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
                                      Object(j.jsx)(u.default, {
                                        style: { marginBottom: 8 },
                                        children: Object(j.jsx)(le, {
                                          title: "See More",
                                          onPress: function () {
                                            return $(!1);
                                          },
                                          direction: "down",
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(j.jsxs)(j.Fragment, {
                                    children: [
                                      Object(j.jsx)(E.default, {
                                        data: _[0].spec,
                                        keyExtractor: function (e, t) {
                                          return t;
                                        },
                                        numColumns: 2,
                                        renderItem: function (e) {
                                          var t = e.item;
                                          return Object(j.jsxs)(u.default, {
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
                                              Object(j.jsx)(p.default, {
                                                style: {
                                                  color: "#aaa",
                                                  fontSize: 12,
                                                },
                                                children: t.item_spec,
                                              }),
                                              Object(j.jsx)(p.default, {
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
                                      Object(j.jsx)(u.default, {
                                        style: { marginBottom: 8 },
                                        children: Object(j.jsx)(le, {
                                          title: "See Less",
                                          onPress: function () {
                                            return $(!0);
                                          },
                                          direction: "up",
                                        }),
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        Object(j.jsx)(u.default, {
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
                          children: Object(j.jsx)(P, {
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
        Qe = l.default.create({
          container: {
            flex: 1,
            margin: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0F7FA",
          },
          bottomNavigationView: { backgroundColor: "#fff", height: 300 },
        }),
        et = n(2),
        tt = n.n(et);
      function nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nt(Object(n), !0).forEach(function (t) {
                tt()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var it = function () {
          return Object(j.jsxs)(u.default, {
            style: { backgroundColor: "white", width: "100%", flex: 1 },
            children: [
              Object(j.jsx)(u.default, {
                style: { margin: 10 },
                children: Object(j.jsx)(w.ArrowLeftIcon, {
                  size: 18,
                  color: "black",
                }),
              }),
              Object(j.jsxs)(u.default, {
                style: rt(rt({}, ot.box_shadow), ot.profile_card),
                children: [
                  Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsx)(p.default, {
                        style: {
                          fontSize: 18,
                          fontWeight: 600,
                          marginVertical: 4,
                        },
                        children: "Chintu",
                      }),
                      Object(j.jsx)(p.default, {
                        style: { color: "grey" },
                        children: "Shibasankar1997@gmail.com",
                      }),
                    ],
                  }),
                  Object(j.jsx)(u.default, {
                    children: Object(j.jsx)(A.default, {
                      style: ot.profile_img,
                      source: n(430),
                    }),
                  }),
                ],
              }),
              Object(j.jsxs)(y.default, {
                showsVerticalScrollIndicator: !1,
                children: [
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      marginHorizontal: 6,
                      justifyContent: "space-between",
                    },
                    children: [
                      Object(j.jsx)(m.default, {
                        children: Object(j.jsxs)(u.default, {
                          style: rt(
                            rt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(j.jsx)(O.HeartIcon, {}),
                            Object(j.jsx)(p.default, { children: "Likes" }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(m.default, {
                        children: Object(j.jsxs)(u.default, {
                          style: rt(
                            rt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(j.jsx)(O.CreditCardIcon, {}),
                            Object(j.jsx)(p.default, { children: "Payments" }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(m.default, {
                        children: Object(j.jsxs)(u.default, {
                          style: rt(
                            rt({}, ot.box_shadow),
                            {},
                            { minWidth: 90, alignItems: "center" }
                          ),
                          children: [
                            Object(j.jsx)(O.Cog6ToothIcon, {}),
                            Object(j.jsx)(p.default, { children: "Settings" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: rt({}, ot.box_shadow),
                    children: [
                      Object(j.jsx)(p.default, {
                        style: { fontWeight: "600" },
                        children: "Your Orders",
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
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
                            children: Object(j.jsx)(O.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsx)(p.default, {
                                children: "Your Order",
                              }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(j.jsx)(O.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsx)(p.default, {
                                children: "Your Order",
                              }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: rt({}, ot.box_shadow),
                    children: [
                      Object(j.jsx)(p.default, {
                        style: { fontWeight: "600" },
                        children: "Your Orders",
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
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
                            children: Object(j.jsx)(O.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsx)(p.default, {
                                children: "Your Order",
                              }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(j.jsx)(O.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsx)(p.default, {
                                children: "Your Order",
                              }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: rt({}, ot.box_shadow),
                    children: [
                      Object(j.jsx)(p.default, {
                        style: { fontWeight: "700", fontSize: 12 },
                        children: "More",
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "center",
                          paddingVertical: 7,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                              marginRight: 10,
                              padding: 4,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(j.jsx)(O.InformationCircleIcon, {
                              size: 22,
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "90%",
                              borderColor: "rgba(113, 113, 106, 0.1)",
                            },
                            children: [
                              Object(j.jsx)(p.default, { children: "About" }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          paddingHorizontal: 10,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              height: 35,
                              width: 35,
                              borderRadius: "50%",
                              marginRight: 10,
                              backgroundColor: "rgba(113, 113, 106, 0.1)",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: Object(j.jsx)(O.ChartBarIcon, {
                              style: { color: "grey" },
                            }),
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsx)(p.default, {
                                children: "Your Order",
                              }),
                              Object(j.jsx)(m.default, {
                                children: Object(j.jsx)(O.ChevronRightIcon, {}),
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
        });
      n(182);
      l.default.create({});
      var at = function () {
          return Object(j.jsx)(u.default, {
            style: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: R,
            },
            children: Object(j.jsx)(p.default, {
              style: { fontSize: 18, fontWeight: "700" },
              children: "Thank You",
            }),
          });
        },
        lt = (l.default.create({}), n(35)),
        ct = function (e) {
          var t = e.img,
            n = e.title,
            r = e.decp;
          return Object(j.jsxs)(u.default, {
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
              Object(j.jsx)(A.default, {
                source: { uri: t },
                style: { width: 70, height: 70 },
                resizeMode: "contain",
              }),
              Object(j.jsx)(p.default, {
                style: { color: B, fontWeight: "600" },
                children: n,
              }),
              Object(j.jsx)(p.default, {
                style: { color: z, fontWeight: "500" },
                children: r,
              }),
            ],
          });
        },
        st =
          (l.default.create({}),
          function (e) {
            var t = e.navigation,
              r = Object(c.useState)(!1),
              i = a()(r, 2),
              o = i[0],
              l = i[1];
            return Object(j.jsxs)(u.default, {
              style: { backgroundColor: "#f2f2f2", flex: 1 },
              children: [
                Object(j.jsx)(u.default, {
                  style: { marginTop: 10 },
                  children: Object(j.jsx)(Se, {
                    navigation: function (e) {
                      return t(e);
                    },
                  }),
                }),
                Object(j.jsxs)(y.default, {
                  showsVerticalScrollIndicator: !1,
                  children: [
                    Object(j.jsx)(A.default, {
                      source: n(503),
                      style: { width: "100%", height: 300 },
                      resizeMode: "contain",
                    }),
                    Object(j.jsx)(p.default, {
                      style: {
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "700",
                      },
                      children: "Get Car Insurance Starting @2678/- year",
                    }),
                    Object(j.jsxs)(u.default, {
                      style: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: 5,
                        marginHorizontal: 5,
                      },
                      children: [
                        Object(j.jsx)(ct, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                        Object(j.jsx)(ct, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                        Object(j.jsx)(ct, {
                          img: "https://static.vecteezy.com/system/resources/previews/014/967/103/original/wall-clock-illustration-in-minimal-style-png.png",
                          title: "Renew Policy in",
                          decp: "2 Minutes",
                        }),
                      ],
                    }),
                    Object(j.jsxs)(u.default, {
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
                        Object(j.jsx)(p.default, {
                          style: { color: B, fontWeight: "600", fontSize: 16 },
                          children: "Get upto 85% off no Car Insurance",
                        }),
                        Object(j.jsxs)(u.default, {
                          style: { marginTop: 10 },
                          children: [
                            Object(j.jsx)(p.default, {
                              style: {
                                color: z,
                                fontWeight: "500",
                                fontSize: 12,
                                margin: 3,
                              },
                              children: "Registration Number",
                            }),
                            Object(j.jsx)(lt.default, {
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
                        Object(j.jsxs)(u.default, {
                          style: { marginTop: 10 },
                          children: [
                            Object(j.jsx)(p.default, {
                              style: {
                                color: z,
                                fontWeight: "500",
                                fontSize: 12,
                                margin: 3,
                              },
                              children: "Phone Number",
                            }),
                            Object(j.jsx)(lt.default, {
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
                        Object(j.jsx)(m.default, {
                          style: {
                            backgroundColor: "orangered",
                            padding: 10,
                            width: 200,
                            borderRadius: 8,
                            marginTop: 5,
                          },
                          children: Object(j.jsx)(p.default, {
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
                    Object(j.jsx)(m.default, {
                      children: Object(j.jsx)(p.default, {
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
                Object(j.jsx)(Ue.default, {
                  visible: o,
                  transparent: !0,
                  children: Object(j.jsx)(qe.default, {
                    intensity: 40,
                    tint: "light",
                    style: {
                      justifyContent: "center",
                      alignSelf: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    },
                    children: Object(j.jsx)(u.default, {
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
                      children: Object(j.jsxs)(u.default, {
                        style: { marginTop: 20 },
                        children: [
                          Object(j.jsx)(A.default, {
                            source: n(504),
                            style: {
                              width: 200,
                              height: 100,
                              alignSelf: "center",
                            },
                            resizeMode: "contain",
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 20,
                              fontWeight: "700",
                              color: "black",
                              alignSelf: "center",
                            },
                            children: "Confirm Car Details",
                          }),
                          Object(j.jsxs)(u.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Model :",
                                  }),
                                  Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Variant :",
                                  }),
                                  Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Registration Date :",
                                  }),
                                  Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Policy No :",
                                  }),
                                  Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  padding: 8,
                                  borderBottomWidth: 1,
                                  borderBottomColor: "grey",
                                },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 13,
                                      fontWeight: "700",
                                      color: "grey",
                                    },
                                    children: "Policy Expiry :",
                                  }),
                                  Object(j.jsx)(p.default, {
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
                              Object(j.jsx)(m.default, {
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
                                children: Object(j.jsx)(p.default, {
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
                          Object(j.jsx)(m.default, {
                            children: Object(j.jsx)(p.default, {
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
        dt =
          (l.default.create({}),
          [
            {
              id: 1,
              img: n(151),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 2,
              img: n(255),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 3,
              img: n(198),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 4,
              img: n(151),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 5,
              img: n(198),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 6,
              img: n(151),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 7,
              img: n(255),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 8,
              img: n(151),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
            {
              id: 9,
              img: n(198),
              text1: "Premium Starts AT",
              text2: "\u20b9 11,254 (20% discount)",
            },
          ]),
        ut = function (e) {
          var t = e.navigation;
          return Object(j.jsxs)(g, {
            children: [
              Object(j.jsx)(Se, {}),
              Object(j.jsx)(v, { navigation: t }),
              Object(j.jsxs)(u.default, {
                children: [
                  Object(j.jsx)(P, { text: "Select Your Model" }),
                  Object(j.jsx)(E.default, {
                    data: dt,
                    keyExtractor: function (e) {
                      return e.id;
                    },
                    numColumns: 3,
                    renderItem: function (e) {
                      var n = e.item;
                      return Object(j.jsxs)(m.default, {
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
                          Object(j.jsx)(A.default, {
                            source: n.img,
                            style: {
                              width: 80,
                              height: 60,
                              resizeMode: "contain",
                            },
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              padding: 5,
                              fontSize: 12,
                              textAlign: "center",
                              fontWeight: "600",
                              color: z,
                            },
                            children: n.text1,
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              padding: 5,
                              fontSize: 12,
                              textAlign: "center",
                              fontWeight: "600",
                              color: z,
                            },
                            children: n.text2,
                          }),
                          Object(j.jsx)(u.default, {
                            style: {
                              alignSelf: "center",
                              marginBottom: 10,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "orange",
                              padding: 4,
                              borderRadius: 10,
                            },
                            children: Object(j.jsx)(p.default, {
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
        },
        ft = (l.default.create({}), n(41)),
        ht = function (e) {
          var t = e.data,
            n = e.activeId,
            r = e.item,
            i = e.index,
            o = Object(ft.useNavigation)();
          return Object(j.jsx)(u.default, {
            children: Object(j.jsx)(u.default, {
              style: {
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                flex: 1,
              },
              children: Object(j.jsx)(u.default, {
                style: {
                  width: "97%",
                  borderRadius: 10,
                  position: "relative",
                  backgroundColor: "white",
                  shadowColor: "gray",
                  shadowOpacity: 0.26,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 12,
                  elevation: 3,
                  alignSelf: "center",
                  alignContent: "center",
                  marginVertical: 10,
                },
                children: Object(j.jsx)(m.default, {
                  onPress: function () {
                    return o.navigate("ServiceDetails", {
                      activeId: n,
                      secid: t[i].id,
                    });
                  },
                  children: Object(j.jsxs)(u.default, {
                    style: jt.componentContainer,
                    children: [
                      Object(j.jsxs)(u.default, {
                        style: {
                          flex: 1,
                          padding: 10,
                          justifyContent: "space-between",
                          width: "100%",
                        },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: jt.title,
                            children: r.title,
                          }),
                          Object(j.jsx)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            },
                            children: Object(j.jsx)(p.default, {
                              style: jt.data,
                              children: r.description,
                            }),
                          }),
                          0 === r.price
                            ? Object(j.jsx)(j.Fragment, {})
                            : Object(j.jsxs)(u.default, {
                                style: {},
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      fontSize: 15,
                                      fontWeight: "700",
                                      color: "green",
                                    },
                                    children: "Price Start From",
                                  }),
                                  Object(j.jsx)(p.default, {
                                    style: { fontSize: 15, fontWeight: "700" },
                                    children: r.price,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      Object(j.jsx)(u.default, {
                        style: {
                          padding: 15,
                          width: 140,
                          height: 140,
                          alignSelf: "baseline",
                          alignContent: "center",
                          justifyContent: "center",
                        },
                        children: Object(j.jsx)(A.default, {
                          source: {
                            uri: "https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/newB.jpg",
                          },
                          style: jt.image,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        jt = l.default.create({
          componentContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
          image: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 6,
            marginLeft: -5,
            boxShadow: "0.5px 1px 3px 0 rgb(0 0 0 / 10%)",
            border: "0.5px solid #e6e6e6",
          },
          title: { fontSize: 17, fontWeight: 700, marginBottom: 10 },
          data: {
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 25,
            height: 105,
            overflowY: "hidden",
            fontFamily: "Font Awesome 5 Free",
          },
        }),
        gt = l.default.create({
          item: {
            backgroundColor: "white",
            shadowColor: "gray",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 12,
            elevation: 3,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            marginTop: 5,
          },
          desc: {
            fontWeight: "700",
            letterSpacing: ".2px",
            color: "#282828",
            fontSize: 25,
            marginBottom: 35,
            marginTop: 35,
          },
          image: { width: "100%", height: "100%", marginTop: 20 },
          button: {
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#e73c33",
            position: "absolute",
            bottom: 0,
            padding: 8,
            borderRadius: 5,
            right: 15,
            paddingHorizontal: 12,
          },
        }),
        bt = function (e) {
          e.navigation;
          var t = e.route,
            n = Object(c.useState)([]),
            r = a()(n, 2),
            o = r[0],
            l = r[1],
            s = Object(c.useState)(0),
            d = a()(s, 2),
            f = d[0],
            h = d[1],
            g = Object(c.useState)(!1),
            b = a()(g, 2),
            x = (b[0], b[1]),
            O = Object(c.useState)([]),
            w = a()(O, 2),
            S = w[0],
            C = w[1],
            v = Object(c.useState)(0),
            k = a()(v, 2),
            z = k[0],
            I = k[1],
            R = Object(c.useState)(0),
            W = a()(R, 2),
            T = (W[0], W[1]),
            B = t.params.id;
          Object(c.useEffect)(function () {
            D(B);
          }, []);
          var D = (function () {
              var e = i()(function* (e) {
                var t = yield N("/" + e);
                console.log("model", t.data), l(t.data), x(!0), P(t.data[0].id);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = (function () {
              var e = i()(function* (e) {
                var t = yield J("/" + e);
                console.log("varient", t.data), C(t.data), h(e), x(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(j.jsxs)(u.default, {
            style: { flex: 1, backgroundColor: "#fff" },
            children: [
              Object(j.jsx)(u.default, {
                style: {
                  width: "100%",
                  backgroundColor: "white",
                  borderBottomWidth: 0.2,
                  paddingBottom: 4,
                  borderBottomColor: "#bbb",
                },
                children: Object(j.jsx)(E.default, {
                  showsHorizontalScrollIndicator: !1,
                  horizontal: !0,
                  data: o,
                  renderItem: function (e) {
                    var t = e.item,
                      n = e.index,
                      r = e.compo;
                    return Object(j.jsx)(m.default, {
                      onPress: function () {
                        P(t.id), I(n), T(r);
                      },
                      activeOpacity: 0.8,
                      style: { margin: 8 },
                      children: Object(j.jsx)(
                        p.default,
                        { style: gt.item, children: t.title },
                        t.id
                      ),
                    });
                  },
                }),
              }),
              S.length > 0
                ? Object(j.jsxs)(y.default, {
                    showsVerticalScrollIndicator: !1,
                    style: { flex: 1 },
                    children: [
                      Object(j.jsx)(A.default, {
                        source: {
                          uri: "https://storage.googleapis.com/gomechanic_assets/Sub%20Category%20Images/01.jpg",
                        },
                        style: {
                          height: 165,
                          width: "100%",
                          resizeMode: "contain",
                          marginLeft: 5,
                          marginRight: 5,
                          alignSelf: "center",
                          marginTop: 5,
                          borderRadius: 20,
                        },
                      }),
                      Object(j.jsx)(p.default, {
                        style: { fontSize: 18, fontWeight: "700", padding: 10 },
                        children: o[z].name,
                      }),
                      Object(j.jsx)(E.default, {
                        data: S,
                        renderItem: function (e) {
                          var t = e.item,
                            n = e.index;
                          return Object(j.jsx)(ht, {
                            data: S,
                            activeId: f,
                            index: n,
                            item: t,
                          });
                        },
                      }),
                    ],
                  })
                : null,
            ],
          });
        };
      function xt(e) {
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
          var n,
            r = Pe()(e);
          if (t) {
            var i = Pe()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Be()(this, n);
        };
      }
      var yt = ge.default.get("window").width - 10,
        pt = (function (e) {
          We()(n, e);
          var t = xt(n);
          function n(e) {
            var r;
            return (
              ke()(this, n),
              ((r = t.call(this, e)).state = { images: [] }),
              (r.getBannerData = (function () {
                var e = i()(function* (e) {
                  var t = yield q(e);
                  r.getFilteredData(t.data);
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.getFilteredData = function (e) {
                var t = [];
                e.map(function (e) {
                  "image" === e.promotion_type && null !== e.image && t.push(e);
                }),
                  r.setState({ images: t });
              }),
              r
            );
          }
          return (
            Ie()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getBannerData();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(u.default, {
                    style: mt.container,
                    children: this.state.images
                      ? Object(j.jsx)(xe.a, {
                          autoplay: !0,
                          autoplayTimeout: 3e3,
                          loop: !0,
                          index: 0,
                          pageSize: yt,
                          showsPageIndicator: !0,
                          pageIndicatorContainerStyle: {
                            position: "relative",
                            marginTop: 25,
                            alignSelf: "center",
                          },
                          activePageIndicatorStyle: {
                            backgroundColor: "#0D4C92",
                            paddingHorizontal: 5,
                          },
                          useNativeDriver: !1,
                          children: this.state.images.map(function (e, t) {
                            return Object(j.jsx)(
                              u.default,
                              {
                                style: { borderRadius: 15 },
                                children: Object(j.jsx)(A.default, {
                                  style: {
                                    height: 150,
                                    borderRadius: 10,
                                    marginTop: 5,
                                    resizeMode: "cover",
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
                      : Object(j.jsx)(j.Fragment, {}),
                  });
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        mt = l.default.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          },
        }),
        Ot = function () {
          return Object(j.jsxs)(u.default, {
            children: [
              Object(j.jsxs)(u.default, {
                style: { paddingHorizontal: 8 },
                children: [
                  Object(j.jsx)(p.default, {
                    style: {
                      fontWeight: "700",
                      fontSize: 16,
                      textAlign: "left",
                      alignSelf: "flex-start",
                      marginVertical: 10,
                      color: "#0D4C92",
                    },
                    children: "Sell Your Car in 3 easy Steps",
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      paddingVertical: 10,
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle,
                        source: n(120),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row-reverse",
                      justifyContent: "flex-end",
                      paddingVertical: 10,
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle,
                        source: n(511),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      paddingVertical: 10,
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle,
                        source: n(512),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(j.jsxs)(u.default, {
                style: { paddingHorizontal: 15 },
                children: [
                  Object(j.jsx)(p.default, {
                    style: {
                      fontWeight: "700",
                      fontSize: 16,
                      textAlign: "left",
                      alignSelf: "flex-start",
                      marginVertical: 10,
                      color: "#0D4C92",
                    },
                    children: "Why Superapp",
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      paddingVertical: 10,
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle2,
                        source: n(513),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      paddingVertical: 10,
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle2,
                        source: n(514),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      paddingVertical: 10,
                      flex: 1,
                      marginBottom: 30,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: wt.imgstyle2,
                        source: n(515),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexShrink: 1, paddingHorizontal: 15 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600", marginVertical: 8 },
                            children: "Get price online",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adi elit. Tenetur deserunt, saepe magnam.",
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
        wt = l.default.create({
          imgstyle: { height: 120, width: 120 },
          imgstyle2: { height: 70, width: 70 },
        }),
        St = n(121),
        Ct = n(342);
      function vt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? vt(Object(n), !0).forEach(function (t) {
                tt()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var zt = function () {
          return Object(j.jsxs)(u.default, {
            children: [
              Object(j.jsx)(u.default, {
                style: It.container,
                children: Object(j.jsx)(St.default, {
                  source: {
                    uri: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
                  },
                  resizeMode: "cover",
                  style: { height: "100%", width: "100%", flex: 1 },
                  children: Object(j.jsx)(Ct.LinearGradient, {
                    colors: [
                      "rgba(0,0,0,0.6)",
                      "rgba(0,0,0,0.6)",
                      "rgba(0,0,0,0.6)",
                    ],
                    style: { flex: 1, justifyContent: "center" },
                    children: Object(j.jsxs)(u.default, {
                      style: It.section1,
                      children: [
                        Object(j.jsx)(p.default, {
                          style: {
                            fontWeight: "600",
                            color: "white",
                            fontSize: 18,
                            marginBottom: 10,
                          },
                          children: "Why Buy From Us",
                        }),
                        Object(j.jsxs)(u.default, {
                          style: {
                            flexDirection: "row",
                            paddingVertical: 15,
                            flex: 1,
                          },
                          children: [
                            Object(j.jsx)(A.default, {
                              style: {
                                height: 70,
                                width: 70,
                                backgroundColor: "white",
                              },
                              source: n(120),
                            }),
                            Object(j.jsxs)(u.default, {
                              style: { flexShrink: 1, marginLeft: 20 },
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 16,
                                    fontWeight: "600",
                                    color: "white",
                                  },
                                  children: "12-Month Warranty",
                                }),
                                Object(j.jsx)(p.default, {
                                  style: { color: "white" },
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iste repellendus quaerat.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(u.default, {
                          style: {
                            flexDirection: "row",
                            paddingVertical: 15,
                            alignItems: "center",
                          },
                          children: [
                            Object(j.jsx)(A.default, {
                              style: {
                                height: 70,
                                width: 70,
                                backgroundColor: "white",
                              },
                              source: n(120),
                            }),
                            Object(j.jsxs)(u.default, {
                              style: { flex: 1, marginLeft: 20 },
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 16,
                                    fontWeight: "600",
                                    color: "white",
                                  },
                                  children: "12-Month Warranty",
                                }),
                                Object(j.jsx)(p.default, {
                                  style: { flexShrink: 1, color: "white" },
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsa.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(u.default, {
                          style: {
                            flexDirection: "row",
                            paddingVertical: 15,
                            alignItems: "center",
                          },
                          children: [
                            Object(j.jsx)(A.default, {
                              style: {
                                height: 70,
                                width: 70,
                                backgroundColor: "white",
                              },
                              source: n(120),
                            }),
                            Object(j.jsxs)(u.default, {
                              style: { flex: 1, marginLeft: 20 },
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 16,
                                    fontWeight: "600",
                                    color: "white",
                                  },
                                  children: "12-Month Warranty",
                                }),
                                Object(j.jsx)(p.default, {
                                  style: { flexShrink: 1, color: "white" },
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda atque perferendis.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(u.default, {
                          style: {
                            flexDirection: "row",
                            paddingVertical: 15,
                            alignItems: "center",
                          },
                          children: [
                            Object(j.jsx)(A.default, {
                              style: {
                                height: 70,
                                width: 70,
                                backgroundColor: "white",
                              },
                              source: n(120),
                            }),
                            Object(j.jsxs)(u.default, {
                              style: { flex: 1, marginLeft: 20 },
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    fontSize: 16,
                                    fontWeight: "600",
                                    color: "white",
                                  },
                                  children: "12-Month Warranty",
                                }),
                                Object(j.jsx)(p.default, {
                                  style: { flexShrink: 1, color: "white" },
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus praesentium.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(j.jsxs)(u.default, {
                style: kt(kt({}, It.container), {}, { padding: 15 }),
                children: [
                  Object(j.jsx)(p.default, {
                    style: {
                      fontWeight: "600",
                      fontSize: 18,
                      marginBottom: 10,
                      color: "#0D4C92",
                    },
                    children: "Buy in 3 Easy Steps",
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginVertical: 10,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: { height: 100, width: 140, borderRadius: 10 },
                        source: {
                          uri: "https://media.istockphoto.com/id/1395134717/photo/happy-salesman-selling-the-car-to-his-female-profile-in-a-showroom.jpg?b=1&s=170667a&w=0&k=20&c=U39ozSBOs-Vi2fPxyHR5zXPB3sOhpyJTmUoR_mNae1U=",
                        },
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flex: 1, marginLeft: 20 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 16,
                              fontWeight: "600",
                              color: D,
                            },
                            children: "Find the perfect for you",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { flexShrink: 1, color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginVertical: 10,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: { height: 100, width: 140, borderRadius: 10 },
                        source: {
                          uri: "https://media.istockphoto.com/id/1395134717/photo/happy-salesman-selling-the-car-to-his-female-profile-in-a-showroom.jpg?b=1&s=170667a&w=0&k=20&c=U39ozSBOs-Vi2fPxyHR5zXPB3sOhpyJTmUoR_mNae1U=",
                        },
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flex: 1, marginLeft: 20 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 16,
                              fontWeight: "600",
                              color: D,
                            },
                            children: "Find the perfect for you",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { flexShrink: 1, color: z },
                            children:
                              "Lorem ipsum dolor sit, amet consectetur adipisicing.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginVertical: 10,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        style: { height: 100, width: 140, borderRadius: 10 },
                        source: {
                          uri: "https://media.istockphoto.com/id/1395134717/photo/happy-salesman-selling-the-car-to-his-female-profile-in-a-showroom.jpg?b=1&s=170667a&w=0&k=20&c=U39ozSBOs-Vi2fPxyHR5zXPB3sOhpyJTmUoR_mNae1U=",
                        },
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flex: 1, marginLeft: 20 },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 16,
                              fontWeight: "600",
                              color: D,
                            },
                            children: "Find the perfect for you",
                          }),
                          Object(j.jsx)(p.default, {
                            style: { flexShrink: 1, color: z },
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing.",
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
        It = l.default.create({
          container: { justifyContent: "center", position: "relative" },
          background: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300,
            zIndex: 3,
          },
          section1: {
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            zIndex: 7,
            padding: 20,
          },
          section2: { padding: 20 },
        }),
        Rt = function () {
          var e = Object(c.useState)("buy"),
            t = a()(e, 2),
            n = t[0],
            r = t[1];
          return Object(j.jsxs)(g, {
            children: [
              Object(j.jsx)(Se, {}),
              Object(j.jsxs)(u.default, {
                style: { flex: 1, marginTop: 0, backgroundColor: "white" },
                children: [
                  Object(j.jsxs)(u.default, {
                    style: {
                      flexDirection: "row",
                      width: 90,
                      padding: 3,
                      borderRadius: 15,
                      backgroundColor: "#0D4C92",
                      marginVertical: 10,
                      alignSelf: "flex-end",
                      marginHorizontal: 15,
                    },
                    children: [
                      Object(j.jsx)(m.default, {
                        onPress: function () {
                          r("buy");
                        },
                        children: Object(j.jsx)(p.default, {
                          style: "buy" === n ? Wt.activeradiobtn : Wt.radiobtn,
                          children: "Buy",
                        }),
                      }),
                      Object(j.jsx)(m.default, {
                        onPress: function () {
                          r("sell");
                        },
                        children: Object(j.jsx)(p.default, {
                          style: "sell" === n ? Wt.activeradiobtn : Wt.radiobtn,
                          children: "Sell",
                        }),
                      }),
                    ],
                  }),
                  Object(j.jsxs)(y.default, {
                    showsVerticalScrollIndicator: !1,
                    style: { backgroundColor: "white", padding: 8 },
                    children: [
                      Object(j.jsx)(pt, {}),
                      Object(j.jsx)(u.default, {
                        style: { width: "100%" },
                        children:
                          "buy" === n
                            ? Object(j.jsx)(zt, {})
                            : Object(j.jsx)(Ot, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Wt = l.default.create({
          radiobtn: {
            padding: 3,
            color: "white",
            fontSize: 14,
            paddingHorizontal: 10,
          },
          activeradiobtn: {
            paddingHorizontal: 10,
            color: "white",
            backgroundColor: "white",
            borderRadius: 15,
            fontSize: 14,
            color: "black",
            paddingVertical: 3,
          },
        });
      function Tt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tt(Object(n), !0).forEach(function (t) {
                tt()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Dt = function () {
          return Object(j.jsxs)(u.default, {
            style: { backgroundColor: "white", flex: 1, position: "relative" },
            children: [
              Object(j.jsxs)(u.default, {
                style: {
                  backgroundColor: "#506BE6",
                  paddingBottom: 10,
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                },
                children: [
                  Object(j.jsx)(u.default, {
                    style: {
                      alignSelf: "flex-end",
                      padding: 10,
                      paddingRight: 15,
                    },
                    children: Object(j.jsx)(m.default, {
                      style: {
                        padding: 5,
                        borderRadius: 5,
                        width: 90,
                        color: "blue",
                        backgroundColor: "#F2F3F4",
                      },
                      children: Object(j.jsx)(p.default, {
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
                  Object(j.jsxs)(u.default, {
                    style: {
                      alignSelf: "center",
                      alignContent: "center",
                      position: "relative",
                      marginTop: 4,
                    },
                    children: [
                      Object(j.jsx)(w.PencilIcon, {
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
                      Object(j.jsx)(A.default, {
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
              Object(j.jsxs)(u.default, {
                style: { padding: 20 },
                children: [
                  Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsx)(p.default, {
                        style: Pt.inputlabel,
                        children: "Your Name",
                      }),
                      Object(j.jsx)(lt.default, {
                        style: Pt.textinput,
                        placeholder: "Enter Your Name",
                        value: "JAYASIMHA M H",
                      }),
                    ],
                  }),
                  Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsx)(p.default, {
                        style: Bt(Bt({}, Pt.inputlabel), {}, { marginTop: 15 }),
                        children: "Your Email",
                      }),
                      Object(j.jsx)(lt.default, {
                        style: Pt.textinput,
                        placeholder: "Enter Your Email",
                      }),
                    ],
                  }),
                ],
              }),
              Object(j.jsx)(m.default, {
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
                children: Object(j.jsx)(p.default, {
                  style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                  children: "Save",
                }),
              }),
            ],
          });
        },
        Pt = l.default.create({
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
        Vt = function (e) {
          var t = e.navigation,
            r = Object(c.useState)([]),
            o = a()(r, 2),
            l = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            f = a()(d, 2),
            h = f[0],
            g = f[1],
            b = Object(c.useState)({}),
            x = a()(b, 2),
            y = x[0],
            C = x[1];
          console.log(y.profile_id),
            Object(c.useEffect)(function () {
              v(), console.log(t);
            }, []);
          var v = (function () {
              var e = i()(function* () {
                try {
                  var e = yield S.default.getItem("userCredential");
                  if (null !== e) {
                    var t = JSON.parse(e);
                    console.log(t), C(t);
                  }
                } catch (n) {
                  console.log(n);
                }
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            k = (function () {
              var e = i()(function* (e) {
                if ((s([]), e.length >= 4)) {
                  var t = { profile_id: 2, keyword: e };
                  g(e);
                  var n = yield ae(t);
                  console.log(n), console.log(), s(n.data.items);
                } else g(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(j.jsxs)(u.default, {
            style: { backgroundColor: "#fff", flex: 1 },
            children: [
              Object(j.jsxs)(u.default, {
                style: {
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                },
                children: [
                  Object(j.jsx)(m.default, {
                    onPress: function () {
                      void 0 != t.goBack() ? t.goBack() : t.navigate("main");
                    },
                    style: { flexDirection: "row", alignItems: "center" },
                    children: Object(j.jsx)(O.ArrowLeftIcon, {
                      size: 20,
                      color: "red",
                      style: { marginHorizontal: 10 },
                    }),
                  }),
                  Object(j.jsxs)(u.default, {
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
                      Object(j.jsx)(O.MagnifyingGlassIcon, {
                        size: 25,
                        color: "#0D4C92",
                      }),
                      Object(j.jsx)(lt.default, {
                        placeholderTextColor: "grey",
                        placeholder: 'Search  "Your Car"',
                        style: {
                          paddingLeft: 7,
                          outlineStyle: "none",
                          flex: 1,
                        },
                        onChangeText: function (e) {
                          k(e);
                        },
                        value: h,
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              height: 30,
                              borderWidth: 0.2,
                              borderColor: "black",
                              marginHorizontal: 10,
                            },
                          }),
                          Object(j.jsx)(w.MicrophoneIcon, {
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
                ? Object(j.jsx)(u.default, {
                    style: { flex: 1 },
                    children: Object(j.jsx)(E.default, {
                      data: l,
                      showsVerticalScrollIndicator: !1,
                      keyExtractor: function (e, t) {
                        return t;
                      },
                      renderItem: function (e) {
                        var r = e.item;
                        return Object(j.jsxs)(m.default, {
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
                            Object(j.jsx)(u.default, {
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
                              children: Object(j.jsx)(A.default, {
                                source:
                                  null === r.images ? n(516) : r.images[0],
                                style: {
                                  width: 50,
                                  height: 50,
                                  borderRadius: "50%",
                                  resizeMode: "contain",
                                },
                              }),
                            }),
                            Object(j.jsxs)(u.default, {
                              style: { width: "80%" },
                              children: [
                                Object(j.jsx)(p.default, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 15,
                                    fontWeight: "600",
                                    paddingLeft: 10,
                                  },
                                  children: r.subtitle,
                                }),
                                Object(j.jsx)(p.default, {
                                  numberOfLines: 2,
                                  style: {
                                    textAlign: "justify",
                                    paddingLeft: 10,
                                    color: z,
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
                : Object(j.jsxs)(u.default, {
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 1,
                    },
                    children: [
                      Object(j.jsx)(A.default, {
                        source: n(517),
                        style: { width: 150, height: 150 },
                      }),
                      Object(j.jsx)(p.default, {
                        children: "not yet searched",
                      }),
                    ],
                  }),
            ],
          });
        },
        Et = (l.default.create({}), n(155)),
        At = n(98),
        Lt = function (e) {
          return Object(j.jsx)(u.default, {
            style: Ht.centeredView,
            children: Object(j.jsx)(Ue.default, {
              animationType: "slide",
              transparent: !0,
              visible: e.modalVisible,
              onRequestClose: function () {
                At.default.alert("Modal has been closed."),
                  setModalVisible(!modalVisible);
              },
              children: Object(j.jsx)(u.default, {
                style: Ht.centeredView,
                children: Object(j.jsxs)(u.default, {
                  style: Ht.modalView,
                  children: [
                    Object(j.jsx)(p.default, {
                      style: Ht.modalText,
                      children: e.msg,
                    }),
                    Object(j.jsx)(u.default, {
                      style: { justifyContent: "end" },
                      children: Object(j.jsx)(m.default, {
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
                        children: Object(j.jsx)(p.default, {
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
        Ht = l.default.create({
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
        _t = n(209);
      function Mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Mt(Object(n), !0).forEach(function (t) {
                tt()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Mt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Nt = function (e) {
          var t = e.navigation,
            n = e.route,
            r = Object(c.useState)(!1),
            o = a()(r, 2),
            l = o[0],
            s = o[1],
            d = Object(c.useState)(!1),
            f = a()(d, 2),
            h = f[0],
            g = f[1],
            b = Object(c.useState)(1),
            x = a()(b, 2),
            O = x[0],
            S = x[1],
            C = Object(c.useState)([]),
            v = a()(C, 2),
            k = v[0],
            z = v[1],
            I = Object(c.useState)(""),
            R = a()(I, 2),
            W = R[0],
            T = R[1],
            B = Object(c.useState)({
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
            D = a()(B, 2),
            P = D[0],
            V = D[1];
          Object(c.useEffect)(function () {
            E(n.params.var_id);
          }, []);
          var E = (function () {
              var e = i()(function* (e) {
                var t = yield Y("/" + e);
                z(t.data);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            L = function () {
              0 == P.username.length
                ? (T("please enter Your username"), s(!0))
                : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\./i.test(P.email)
                ? S(2)
                : (T("Please Enter Valid Email"), s(!0));
            };
          return Object(j.jsxs)(y.default, {
            style: { padding: 15, backgroundColor: "white" },
            children: [
              Object(j.jsx)(u.default, {
                children: Object(j.jsx)(p.default, {
                  style: {
                    textAlign: "center",
                    fontSize: 26,
                    fontWeight: "700",
                    paddingVertical: 25,
                  },
                  children: "E-BOOKING",
                }),
              }),
              Object(j.jsxs)(u.default, {
                style: {
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginBottom: 15,
                },
                children: [
                  Object(j.jsx)(m.default, {
                    style:
                      1 === O
                        ? Ft(
                            Ft({}, Yt.buttonlayout),
                            {},
                            tt()({}, "backgroundColor", "#0D4C92")
                          )
                        : Yt.buttonlayout,
                    onPress: function () {
                      S(1);
                    },
                    children: Object(j.jsx)(p.default, {
                      style: { fontSize: 14, fontWeight: "700", color: "#fff" },
                      children: "STEP 1",
                    }),
                  }),
                  Object(j.jsx)(m.default, {
                    style:
                      2 === O
                        ? Ft(
                            Ft({}, Yt.buttonlayout),
                            {},
                            tt()({}, "backgroundColor", "#0D4C92")
                          )
                        : Yt.buttonlayout,
                    onPress: function () {
                      L();
                    },
                    children: Object(j.jsx)(p.default, {
                      style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                      children: "STEP 2",
                    }),
                  }),
                  Object(j.jsx)(m.default, {
                    style:
                      3 === O
                        ? Ft(
                            Ft({}, Yt.buttonlayout),
                            {},
                            tt()({}, "backgroundColor", "#0D4C92")
                          )
                        : Yt.buttonlayout,
                    onPress: function () {},
                    children: Object(j.jsx)(p.default, {
                      style: { fontSize: 14, fontWeight: "600", color: "#fff" },
                      children: "STEP 3",
                    }),
                  }),
                ],
              }),
              Object(j.jsx)(Lt, {
                modalVisible: l,
                setModalVisible: s,
                msg: W,
              }),
              1 === O
                ? Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          alignSelf: "flex-start",
                          marginVertical: 15,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              backgroundColor: "#0D4C92",
                              width: 30,
                              height: 30,
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 14,
                            },
                            children: Object(j.jsx)(p.default, {
                              style: { color: "white" },
                              children: "1",
                            }),
                          }),
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600" },
                            children: "PERSONAL DETAILS",
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { paddingHorizontal: 20 },
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: { marginVertical: 10 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Type Your Name*",
                              }),
                              Object(j.jsx)(lt.default, {
                                value: P.username,
                                placeholder: "Name*",
                                placeholderTextColor: "#8c8c8c",
                                onChangeText: function (e) {
                                  V(Ft(Ft({}, P), {}, tt()({}, "username", e)));
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
                          Object(j.jsxs)(u.default, {
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Type Your Email*",
                              }),
                              Object(j.jsx)(lt.default, {
                                value: P.email,
                                placeholder: "Email*",
                                onChangeText: function (e) {
                                  V(Ft(Ft({}, P), {}, tt()({}, "email", e)));
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
                          Object(j.jsx)(u.default, {
                            children: Object(j.jsx)(lt.default, {
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
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 10,
                              marginVertical: 5,
                              color: "grey",
                            },
                            children: "The fields marked as * are mandatory",
                          }),
                          Object(j.jsx)(u.default, {
                            style: { justifyContent: "end", width: "100%" },
                            children: Object(j.jsx)(m.default, {
                              style: {
                                backgroundColor: "#0D4C92",
                                color: "white",
                                width: 170,
                                paddingHorizontal: 15,
                                paddingVertical: 8,
                                marginVertical: 15,
                                borderRadius: 6,
                              },
                              onPress: L,
                              children: Object(j.jsx)(p.default, {
                                style: { color: "white" },
                                children: "Save & Continue",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(j.jsx)(u.default, {}),
              2 === O
                ? Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsx)(u.default, {
                        children: Object(j.jsx)(A.default, {
                          style: {
                            width: "100%",
                            height: 300,
                            resizeMode: "contain",
                          },
                          source: { uri: k[0].images[0] },
                        }),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          alignSelf: "flex-start",
                          marginVertical: 15,
                        },
                        children: [
                          Object(j.jsx)(u.default, {
                            style: {
                              backgroundColor: "#0D4C92",
                              width: 30,
                              height: 30,
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 14,
                            },
                            children: Object(j.jsx)(p.default, {
                              style: { color: "white" },
                              children: "1",
                            }),
                          }),
                          Object(j.jsx)(p.default, {
                            style: { fontWeight: "600" },
                            children: "CAR DETAILS",
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: { paddingHorizontal: 20 },
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Car Model*",
                              }),
                              Object(j.jsx)(p.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: k[0].title,
                              }),
                            ],
                          }),
                          Object(j.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Car Varient*",
                              }),
                              Object(j.jsx)(p.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: k[0].title,
                              }),
                            ],
                          }),
                          Object(j.jsxs)(u.default, {
                            style: { marginVertical: 8 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { color: "#8c8c8c", fontSize: 12 },
                                children: "Your Varient Color*",
                              }),
                              Object(j.jsx)(p.default, {
                                style: {
                                  borderBottomColor: "grey",
                                  borderBottomWidth: 2,
                                  padding: 6,
                                  outlineStyle: "none",
                                },
                                children: k[0].color,
                              }),
                            ],
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 10,
                              marginVertical: 5,
                              color: "grey",
                            },
                            children: "The fields marked as * are mandatory",
                          }),
                          Object(j.jsx)(u.default, {
                            style: { justifyContent: "end", width: "100%" },
                            children: Object(j.jsx)(m.default, {
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
                                S(3);
                              },
                              children: Object(j.jsx)(p.default, {
                                style: { color: "white" },
                                children: "Confirm & Continue",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(j.jsx)(u.default, {}),
              3 == O
                ? Object(j.jsxs)(u.default, {
                    children: [
                      Object(j.jsxs)(u.default, {
                        Style: 2 === O ? {} : { display: "none" },
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              alignSelf: "flex-start",
                              marginVertical: 15,
                            },
                            children: [
                              Object(j.jsx)(u.default, {
                                style: {
                                  backgroundColor: "#0D4C92",
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: 14,
                                },
                                children: Object(j.jsx)(p.default, {
                                  style: { color: "white" },
                                  children: "1",
                                }),
                              }),
                              Object(j.jsx)(p.default, {
                                style: { fontWeight: "600" },
                                children: "OUTLET DETAILS",
                              }),
                            ],
                          }),
                          Object(j.jsxs)(u.default, {
                            style: { paddingHorizontal: 20 },
                            children: [
                              Object(j.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      color: "#8c8c8c",
                                      fontSize: 12,
                                      marginBottom: 5,
                                    },
                                    children: "Select Your City*",
                                  }),
                                  Object(j.jsx)(_t.default, {
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
                                      return Object(j.jsx)(
                                        w.ChevronDownIcon,
                                        {}
                                      );
                                    },
                                    onSelect: function (e, t) {
                                      console.log(e, t),
                                        V(
                                          Ft(
                                            Ft({}, P),
                                            {},
                                            tt()({}, "city", e.name)
                                          )
                                        );
                                    },
                                    defaultButtonText:
                                      "--- Please select Your City ---",
                                    buttonTextAfterSelection: function (e, t) {
                                      return Object(j.jsx)(p.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 14,
                                          padding: 10,
                                          outlineStyle: "none",
                                        },
                                        children: P.city,
                                      });
                                    },
                                    rowTextForSelection: function (e, t) {
                                      return Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: {
                                      color: "#8c8c8c",
                                      fontSize: 12,
                                      marginBottom: 5,
                                    },
                                    children: "Select Your Outlet*",
                                  }),
                                  Object(j.jsx)(_t.default, {
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
                                      return Object(j.jsx)(
                                        w.ChevronDownIcon,
                                        {}
                                      );
                                    },
                                    onSelect: function (e, t) {
                                      console.log(e, t),
                                        V(
                                          Ft(
                                            Ft({}, P),
                                            {},
                                            tt()({}, "outlet", e.name)
                                          )
                                        );
                                    },
                                    defaultButtonText:
                                      "--- Please select Your Outlet ---",
                                    buttonTextAfterSelection: function (e, t) {
                                      return Object(j.jsx)(p.default, {
                                        style: {
                                          color: "black",
                                          fontSize: 14,
                                          padding: 10,
                                          outlineStyle: "none",
                                        },
                                        children: P.outlet,
                                      });
                                    },
                                    rowTextForSelection: function (e, t) {
                                      return Object(j.jsx)(p.default, {
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
                              Object(j.jsx)(p.default, {
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
                      Object(j.jsxs)(u.default, {
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              alignSelf: "flex-start",
                              marginVertical: 15,
                            },
                            children: [
                              Object(j.jsx)(u.default, {
                                style: {
                                  backgroundColor: "#0D4C92",
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: 14,
                                },
                                children: Object(j.jsx)(p.default, {
                                  style: { color: "white" },
                                  children: "2",
                                }),
                              }),
                              Object(j.jsx)(p.default, {
                                style: { fontWeight: "600" },
                                children: "BUYER DETAILS",
                              }),
                            ],
                          }),
                          Object(j.jsxs)(u.default, {
                            style: { paddingHorizontal: 20 },
                            children: [
                              Object(j.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Type Your Address1*",
                                  }),
                                  Object(j.jsx)(lt.default, {
                                    value: P.address1,
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
                                      V(
                                        Ft(
                                          Ft({}, P),
                                          {},
                                          tt()({}, "address1", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(u.default, {
                                style: { marginVertical: 10 },
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Type Your Address2*",
                                  }),
                                  Object(j.jsx)(lt.default, {
                                    value: P.address2,
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
                                      V(
                                        Ft(
                                          Ft({}, P),
                                          {},
                                          tt()({}, "address2", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(u.default, {
                                children: [
                                  Object(j.jsx)(p.default, {
                                    style: { color: "#8c8c8c", fontSize: 12 },
                                    children: "Pincode*",
                                  }),
                                  Object(j.jsx)(lt.default, {
                                    value: P.pincode,
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
                                      V(
                                        Ft(
                                          Ft({}, P),
                                          {},
                                          tt()({}, "pincode", e)
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                              Object(j.jsx)(p.default, {
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
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "top",
                          margin: 10,
                        },
                        children: [
                          Object(j.jsx)(Et.default, {
                            style: { marginRight: 12 },
                            onValueChange: g,
                            value: h,
                          }),
                          Object(j.jsxs)(u.default, {
                            style: { width: "90%" },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: { fontWeight: "700", fontSize: 12 },
                                children: "Disclaimer:",
                              }),
                              Object(j.jsxs)(p.default, {
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
                              Object(j.jsx)(p.default, {
                                style: { fontSize: 12, fontWeight: "700" },
                                children:
                                  "*Prices/Schemes prevailing at the time of invoice /bill shall be applicable.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(j.jsx)(u.default, {
                        style: { justifyContent: "end", width: "100%" },
                        children: Object(j.jsx)(m.default, {
                          style: {
                            backgroundColor: "#0D4C92",
                            width: 220,
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            marginVertical: 15,
                            borderRadius: 6,
                          },
                          onPress: function () {
                            0 === P.city.length
                              ? (T("please Choose Your City"), s(!0))
                              : 0 === P.outlet.length
                              ? (T("please Choose Your Outlet"), s(!0))
                              : P.address1.length < 4
                              ? (T("please enter Your Address"), s(!0))
                              : 6 !== P.pincode.length
                              ? (T("please enter Your Pincode"), s(!0))
                              : (console.log(P),
                                S(1),
                                t.navigate("Finalpage", { user: P }));
                          },
                          children: Object(j.jsx)(p.default, {
                            style: { color: "white" },
                            children: "Submit & Make Payment",
                          }),
                        }),
                      }),
                    ],
                  })
                : Object(j.jsx)(u.default, {}),
              Object(j.jsx)(u.default, {}),
            ],
          });
        },
        Yt = l.default.create({
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
        Ut = n(23),
        Gt = n.n(Ut),
        Jt = function (e) {
          var t = e.toast,
            n = e.message;
          return Object(j.jsxs)(j.Fragment, {
            children: [
              "success" === n
                ? Object(j.jsxs)(u.default, {
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
                      Object(j.jsx)(ShieldCheckIcon, {
                        size: 20,
                        color: "green",
                      }),
                      Object(j.jsx)(p.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: B,
                          textAlign: "center",
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
              "warning" === n
                ? Object(j.jsxs)(u.default, {
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
                      Object(j.jsx)(w.ShieldExclamationIcon, {
                        size: 20,
                        color: "orange",
                      }),
                      Object(j.jsx)(p.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: B,
                          textAlign: "center",
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
              "danger" === n
                ? Object(j.jsxs)(u.default, {
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
                      Object(j.jsx)(w.XCircleIcon, { size: 20, color: "red" }),
                      Object(j.jsx)(p.default, {
                        style: {
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "600",
                          colo: B,
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
        Kt =
          (l.default.create({}),
          function (e) {
            var t = e.length,
              r = void 0 === t ? 6 : t,
              o = (e.onComplete, e.navigation),
              l = Object(c.useState)(!1),
              s = a()(l, 2),
              d = s[0],
              f = s[1],
              h = Object(c.useState)(""),
              b = a()(h, 2),
              x = b[0],
              y = b[1],
              O = Object(c.useState)(""),
              w = a()(O, 2),
              S = w[0],
              C = w[1],
              v = Object(c.useState)(!1),
              k = a()(v, 2),
              I = k[0],
              R = k[1],
              W = Object(c.useState)(!1),
              T = a()(W, 2),
              B = T[0],
              D = T[1],
              P = Object(c.useState)(!0),
              V = a()(P, 2),
              E = V[0],
              L = (V[1], Object(c.useState)(!1)),
              H = a()(L, 2),
              _ = (H[0], H[1]),
              M = Object(c.useState)(""),
              F = a()(M, 2),
              N = (F[0], F[1], Object(c.useState)(!0)),
              Y = a()(N, 2),
              U = Y[0],
              G = Y[1],
              J = Object(c.useState)(),
              K = a()(J, 2),
              q = K[0],
              $ = K[1],
              Q = Object(c.useState)(""),
              ee = a()(Q, 2),
              te = ee[0],
              re = ee[1],
              ie = Object(c.useState)(!1),
              oe = a()(ie, 2),
              ae = oe[0],
              le = oe[1],
              ce = Object(c.useState)(new je.default.Value(0)),
              se = a()(ce, 1)[0],
              de = Object(c.useRef)([]),
              ue = (function () {
                var e = i()(function* (e) {
                  var t = yield ne({ phone: e });
                  console.log(t),
                    404 === t.data.error
                      ? (fe(e), f(1))
                      : (G(!1),
                        o.navigate("Enter Your Pin", { email: "", mobile: e }));
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              fe = (function () {
                var e = i()(function* (e) {
                  var t = {
                      flow_id: "2079031d-a1ac-4bbe-bf58-2495bd6e5703",
                      to: { mobile: "+91" + e, email: "yadhurajm@gmail.com" },
                    },
                    n = yield X(t);
                  if (!n.ok) return console.log(n.data);
                  D(n.data.data.verify_id), _({ isOtpSent: !0 });
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              he = (function () {
                var e = i()(function* (e, t, n) {
                  if (6 === t.length) {
                    var r = { verify_id: e, otp: t };
                    console.log(n),
                      (yield Z(r)).ok
                        ? (f(null),
                          G(!0),
                          o.navigate("conformPinScreen", {
                            email: "",
                            mobile: n,
                            userStatus: U,
                          }),
                          le(!1))
                        : ($(!0), le(!0));
                  }
                });
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })();
            Object(c.useEffect)(
              function () {
                ae &&
                  je.default
                    .sequence([
                      je.default.timing(se, {
                        toValue: 10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      je.default.timing(se, {
                        toValue: -10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      je.default.timing(se, {
                        toValue: 10,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                      je.default.timing(se, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: !0,
                      }),
                    ])
                    .start(function () {
                      return le(!1);
                    });
              },
              [ae, se]
            );
            var ge = function (e, t) {
                var n = Gt()(te);
                (n[t] = e),
                  re(n.join("")),
                  0 === e.length && t > 0
                    ? (de.current[t - 1].focus(),
                      (n[t - 1] = ""),
                      re(n.join("")))
                    : 1 === e.length && t < r - 1 && de.current[t + 1].focus(),
                  he(B, n.join(""), S);
              },
              be = function (e, t) {
                if ("Backspace" === e.nativeEvent.key && t > 0) {
                  var n = Gt()(te);
                  "" !== n[t] &&
                    (de.current[t - 1].focus(),
                    (n[t - 1] = ""),
                    console.log(n)),
                    (n[t] = ""),
                    re(n.join(""));
                }
              },
              xe = Array(r).fill(0);
            return Object(j.jsxs)(g, {
              children: [
                Object(j.jsxs)(u.default, {
                  style: { backgroundColor: "#fff", flex: 1 },
                  children: [
                    Object(j.jsx)(u.default, {
                      style: Xt.imgCont,
                      children: Object(j.jsx)(A.default, {
                        source: n(256),
                        style: Xt.img,
                      }),
                    }),
                    Object(j.jsx)(u.default, {
                      children: Object(j.jsxs)(p.default, {
                        style: Xt.headline,
                        children: [
                          "Karnataka's #1",
                          "\n",
                          "Maruti Suzuki Dealership App.",
                        ],
                      }),
                    }),
                    Object(j.jsxs)(u.default, {
                      style: Xt.hrlines,
                      children: [
                        Object(j.jsx)(u.default, { style: Xt.line }),
                        Object(j.jsx)(p.default, {
                          style: Xt.loginText,
                          children: "Login or Sign up",
                        }),
                        Object(j.jsx)(u.default, { style: Xt.line }),
                      ],
                    }),
                    Object(j.jsxs)(u.default, {
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
                        Object(j.jsx)(A.default, {
                          style: { height: 25, width: 30, borderRadius: 4 },
                          source: n(518),
                        }),
                        Object(j.jsx)(p.default, {
                          style: {
                            color: "black",
                            fontSize: 15,
                            fontWeight: "500",
                            paddingHorizontal: 4,
                            marginLeft: 5,
                          },
                          children: "+91",
                        }),
                        Object(j.jsx)(lt.default, {
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
                              C(t);
                              var n = ("" + e)
                                .replace(/\D/g, "")
                                .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
                              if (n) {
                                var r = [
                                  n[1] ? "+1 " : "",
                                  "(",
                                  n[2],
                                  ") ",
                                  n[3],
                                  "-",
                                  n[4],
                                ].join("");
                                y(r);
                              } else y(e);
                            })(e),
                              R("");
                          },
                          value: x,
                        }),
                        Object(j.jsx)(p.default, {
                          style: {
                            color: "red",
                            fontSize: 12,
                            paddingLeft: 10,
                          },
                          children: I,
                        }),
                      ],
                    }),
                    Object(j.jsx)(m.default, {
                      onPress: function () {
                        !(function (e) {
                          /^[0-9]{10}$/i.test(e) ? ue(e) : R("Invalid Number");
                        })(S);
                      },
                      children: Object(j.jsx)(u.default, {
                        style: Xt.btn,
                        children: Object(j.jsx)(p.default, {
                          style: Xt.txt,
                          children: "continue",
                        }),
                      }),
                    }),
                    Object(j.jsxs)(p.default, {
                      style: {
                        color: z,
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
                E
                  ? Object(j.jsx)(j.Fragment, {
                      children: Object(j.jsx)(Je.BottomSheet, {
                        visible: 1 === d,
                        onBackButtonPress: function () {
                          f(null);
                        },
                        onBackdropPress: function () {
                          f(null);
                        },
                        children: Object(j.jsxs)(u.default, {
                          style: Xt.bottomNavigationView,
                          children: [
                            Object(j.jsxs)(p.default, {
                              style: {
                                fontSize: 12,
                                fontWeight: "500",
                                padding: 10,
                              },
                              children: [
                                "Please Enter OTP sent to",
                                Object(j.jsxs)(p.default, {
                                  style: {
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: z,
                                  },
                                  children: ["+91 ", S],
                                }),
                              ],
                            }),
                            Object(j.jsx)(u.default, {
                              children: ae
                                ? Object(j.jsx)(je.default.View, {
                                    style: [
                                      Xt.errorText,
                                      { transform: [{ translateX: se }] },
                                    ],
                                    children: Object(j.jsx)(u.default, {
                                      style: Xt.container,
                                      children: xe.map(function (e, t) {
                                        return Object(j.jsx)(
                                          lt.default,
                                          {
                                            value: te[t] || "",
                                            onChangeText: function (e) {
                                              return ge(e, t);
                                            },
                                            maxLength: 1,
                                            style: [
                                              Xt.input,
                                              ae && Xt.inputError,
                                            ],
                                            keyboardType: "number-pad",
                                            ref: function (e) {
                                              de.current[t] = e;
                                            },
                                            onSubmitEditing: function () {
                                              t === r - 1 &&
                                                de.current[t].blur();
                                            },
                                            onKeyPress: function (e) {
                                              return be(e, t);
                                            },
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  })
                                : Object(j.jsx)(u.default, {
                                    style: Xt.container,
                                    children: xe.map(function (e, t) {
                                      return Object(j.jsx)(
                                        lt.default,
                                        {
                                          value: te[t] || "",
                                          onChangeText: function (e) {
                                            return ge(e, t);
                                          },
                                          maxLength: 1,
                                          style: [
                                            Xt.input,
                                            ae && Xt.inputError,
                                          ],
                                          keyboardType: "numeric",
                                          ref: function (e) {
                                            de.current[t] = e;
                                          },
                                          onSubmitEditing: function () {
                                            t === r - 1 && de.current[t].blur();
                                          },
                                          onKeyPress: function (e) {
                                            return be(e, t);
                                          },
                                        },
                                        t
                                      );
                                    }),
                                  }),
                            }),
                            q
                              ? Object(j.jsx)(Jt, {
                                  message: "warning",
                                  toast: "Please Enter Correct OTP",
                                })
                              : null,
                          ],
                        }),
                      }),
                    })
                  : Object(j.jsx)(pe, {}),
              ],
            });
          }),
        Xt = l.default.create({
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
            color: T,
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
          sec_line: { height: 0.8, width: "50%", backgroundColor: z },
          loginText: {
            marginLeft: 15,
            marginRight: 15,
            fontWeight: "600",
            fontSize: 17,
            color: z,
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
          var n,
            r = Pe()(e);
          if (t) {
            var i = Pe()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Be()(this, n);
        };
      }
      !(function (e) {
        We()(r, e);
        var t = Zt(r);
        function r(e) {
          var n;
          return (
            ke()(this, r), ((n = t.call(this, e)).state = { code: null }), n
          );
        }
        Ie()(r, [
          {
            key: "render",
            value: function () {
              return Object(j.jsxs)(u.default, {
                style: { backgroundColor: "#fff", flex: 1 },
                children: [
                  Object(j.jsx)(u.default, {
                    style: qt.imgCont,
                    children: Object(j.jsx)(A.default, {
                      source: n(256),
                      style: qt.img,
                    }),
                  }),
                  Object(j.jsx)(u.default, {
                    children: Object(j.jsx)(p.default, {
                      style: qt.headline,
                      children:
                        "please Enter the otp sent to the given phone number.",
                    }),
                  }),
                  Object(j.jsx)(u.default, {
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
                  Object(j.jsxs)(p.default, {
                    style: {
                      color: z,
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
      var qt = l.default.create({
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
            color: T,
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
          sec_line: { height: 0.8, width: "50%", backgroundColor: z },
          loginText: {
            marginLeft: 15,
            marginRight: 15,
            fontWeight: "600",
            fontSize: 17,
            color: z,
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
        $t = function (e) {
          var t = e.length,
            r = void 0 === t ? 6 : t,
            o = (e.onComplete, e.navigation),
            l = e.route,
            s = Object(c.useState)(""),
            d = a()(s, 2),
            f = d[0],
            h = d[1],
            b = Object(c.useState)(""),
            x = a()(b, 2),
            y = (x[0], x[1], Object(c.useState)("")),
            O = a()(y, 2),
            w = (O[0], O[1], Object(c.useState)("")),
            C = a()(w, 2),
            v = C[0],
            k = (C[1], Object(c.useState)("")),
            z = a()(k, 2),
            I = z[0],
            R = z[1],
            W = Object(c.useState)(!1),
            T = a()(W, 2),
            B = T[0],
            D = T[1],
            P = Object(c.useState)(new je.default.Value(0)),
            V = a()(P, 1)[0],
            E = Object(c.useRef)([]),
            L = Object(c.useRef)([]);
          console.log(v);
          var H = (function () {
              var e = i()(function* (e, t) {
                var n = yield re({
                  username: l.params.mobile,
                  password: e,
                  email: "",
                  first_name: "",
                  last_name: "",
                });
                _(l.params.mobile, n.data.id);
                var r = yield oe({ phone: l.params.mobile, password: e });
                try {
                  yield S.default.setItem(
                    "userCredential",
                    JSON.stringify({
                      phone: l.params.mobile,
                      password: e,
                      profile_id: r.data.profile_id,
                    })
                  );
                } catch (i) {
                  console.log(i);
                }
                o.navigate("app"), l.params.mobile, r.data.profile_id;
              });
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var e = i()(function* (e, t) {
                var n = yield ie({
                  phone: e,
                  gender: "",
                  year_of_birth: 0,
                  lat: "",
                  long: "",
                  user: t,
                });
                console.log(n);
              });
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          Object(c.useEffect)(
            function () {
              B &&
                je.default
                  .sequence([
                    je.default.timing(V, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(V, {
                      toValue: -10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(V, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(V, {
                      toValue: 0,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                  ])
                  .start(function () {
                    return D(!1);
                  });
            },
            [B, V]
          );
          var M = function (e, t) {
              var n = Gt()(f);
              (n[t] = e),
                h(n.join("")),
                0 === e.length && t > 0
                  ? (E.current[t - 1].focus(), (n[t - 1] = ""), h(n.join("")))
                  : 1 === e.length && t < r - 1 && E.current[t + 1].focus();
            },
            F = function (e, t) {
              var n = Gt()(I);
              (n[t] = e),
                R(n.join("")),
                0 === e.length && t > 0
                  ? (L.current[t - 1].focus(), (n[t - 1] = ""), R(n.join("")))
                  : 1 === e.length && t < r - 1 && L.current[t + 1].focus(),
                (function (e, t) {
                  6 == t.length && D(e !== t);
                })(f, n.join(""));
            };
          console.log(f), console.log(I);
          var N = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var n = Gt()(f);
                "" !== n[t] &&
                  (E.current[t - 1].focus(), (n[t - 1] = ""), console.log(n)),
                  (n[t] = ""),
                  h(n.join(""));
              }
            },
            Y = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var n = Gt()(I);
                "" !== n[t] &&
                  (L.current[t - 1].focus(), (n[t - 1] = ""), console.log(n)),
                  (n[t] = ""),
                  R(n.join(""));
              }
            },
            U = Array(r).fill(0);
          return Object(j.jsx)(g, {
            children: Object(j.jsxs)(u.default, {
              style: { flex: 1 },
              children: [
                Object(j.jsx)(A.default, {
                  source: n(257),
                  style: { width: "100%", height: 170, resizeMode: "contain" },
                }),
                Object(j.jsx)(p.default, {
                  style: {
                    fontSize: 22,
                    fontWeight: "600",
                    color: "#000",
                    paddingVertical: 5,
                    alignSelf: "center",
                  },
                  children: "Create Your 6 Digit Login Pin",
                }),
                Object(j.jsxs)(u.default, {
                  style: { flex: 1, position: "relative" },
                  children: [
                    Object(j.jsx)(u.default, {
                      children: B
                        ? Object(j.jsx)(je.default.View, {
                            style: [
                              Qt.errorText,
                              { transform: [{ translateX: V }] },
                            ],
                            children: Object(j.jsx)(u.default, {
                              style: Qt.container,
                              children: U.map(function (e, t) {
                                return Object(j.jsx)(
                                  lt.default,
                                  {
                                    value: f[t] || "",
                                    onChangeText: function (e) {
                                      return M(e, t);
                                    },
                                    maxLength: 1,
                                    style: [Qt.input, B && Qt.inputError],
                                    keyboardType: "number-pad",
                                    ref: function (e) {
                                      E.current[t] = e;
                                    },
                                    onSubmitEditing: function () {
                                      t === r - 1 && E.current[t].blur();
                                    },
                                    onKeyPress: function (e) {
                                      return N(e, t);
                                    },
                                  },
                                  t
                                );
                              }),
                            }),
                          })
                        : Object(j.jsx)(u.default, {
                            style: Qt.container,
                            children: U.map(function (e, t) {
                              return Object(j.jsx)(
                                lt.default,
                                {
                                  value: f[t] || "",
                                  onChangeText: function (e) {
                                    return M(e, t);
                                  },
                                  maxLength: 1,
                                  style: [Qt.input, B && Qt.inputError],
                                  keyboardType: "numeric",
                                  ref: function (e) {
                                    E.current[t] = e;
                                  },
                                  onSubmitEditing: function () {
                                    t === r - 1 && E.current[t].blur();
                                  },
                                  onKeyPress: function (e) {
                                    return N(e, t);
                                  },
                                },
                                t
                              );
                            }),
                          }),
                    }),
                    Object(j.jsx)(u.default, {
                      children: B
                        ? Object(j.jsx)(je.default.View, {
                            style: [
                              Qt.errorText,
                              { transform: [{ translateX: V }] },
                            ],
                            children: Object(j.jsx)(u.default, {
                              style: Qt.container,
                              children: U.map(function (e, t) {
                                return Object(j.jsx)(
                                  lt.default,
                                  {
                                    value: I[t] || "",
                                    onChangeText: function (e) {
                                      return F(e, t);
                                    },
                                    maxLength: 1,
                                    style: [Qt.input, B && Qt.inputError],
                                    keyboardType: "number-pad",
                                    ref: function (e) {
                                      L.current[t] = e;
                                    },
                                    onSubmitEditing: function () {
                                      t === r - 1 && L.current[t].blur();
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
                        : Object(j.jsx)(u.default, {
                            style: Qt.container,
                            children: U.map(function (e, t) {
                              return Object(j.jsx)(
                                lt.default,
                                {
                                  value: I[t] || "",
                                  onChangeText: function (e) {
                                    return F(e, t);
                                  },
                                  maxLength: 1,
                                  style: [Qt.input, B && Qt.inputError],
                                  keyboardType: "numeric",
                                  ref: function (e) {
                                    L.current[t] = e;
                                  },
                                  onSubmitEditing: function () {
                                    t === r - 1 && L.current[t].blur();
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
                    B
                      ? Object(j.jsx)(Jt, {
                          message: "warning",
                          toast: "password did not match !",
                        })
                      : null,
                    Object(j.jsx)(m.default, {
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
                        H(f, I);
                      },
                      children: Object(j.jsx)(p.default, {
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
        Qt = l.default.create({
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
        en = function () {
          return Object(j.jsx)(u.default, {
            children: Object(j.jsx)(p.default, {
              children: "conformForgotPin",
            }),
          });
        },
        tn =
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
        nn = function (e) {
          var t = e.length,
            r = void 0 === t ? 6 : t,
            o = (e.onComplete, e.navigation),
            l = e.route,
            s = Object(c.useState)(""),
            d = a()(s, 2),
            f = d[0],
            h = d[1],
            g = Object(c.useState)(!1),
            b = a()(g, 2),
            x = b[0],
            y = b[1],
            m = Object(c.useState)(new je.default.Value(0)),
            O = a()(m, 1)[0],
            w = Object(c.useRef)([]),
            C = Object(c.useState)(""),
            v = a()(C, 2),
            k = v[0],
            z = (v[1], Object(c.useState)("")),
            I = a()(z, 2),
            R =
              (I[0],
              I[1],
              (function () {
                var e = i()(function* (e, t) {
                  if (6 == t.length) {
                    var n = yield oe({ phone: e, password: t });
                    if (404 === n.data.error) y(!0);
                    else {
                      y(!1);
                      try {
                        yield S.default.setItem(
                          "userCredential",
                          JSON.stringify({
                            phone: l.params.mobile,
                            password: k,
                            profile_id: n.data.profile_id,
                          })
                        );
                      } catch (r) {
                        console.log(r);
                      }
                      o.navigate("app", {
                        phone: e,
                        profile_id: n.data.profile_id,
                      });
                    }
                  }
                });
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })());
          Object(c.useEffect)(
            function () {
              x &&
                je.default
                  .sequence([
                    je.default.timing(O, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(O, {
                      toValue: -10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(O, {
                      toValue: 10,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                    je.default.timing(O, {
                      toValue: 0,
                      duration: 100,
                      useNativeDriver: !0,
                    }),
                  ])
                  .start(function () {
                    return y(!1);
                  });
            },
            [x, O]
          );
          var W = function (e, t) {
              var n = Gt()(f);
              (n[t] = e),
                h(n.join("")),
                0 === e.length && t > 0
                  ? (w.current[t - 1].focus(), (n[t - 1] = ""), h(n.join("")))
                  : 1 === e.length && t < r - 1 && w.current[t + 1].focus(),
                R(l.params.mobile, n.join(""));
            },
            T = function (e, t) {
              if ("Backspace" === e.nativeEvent.key && t > 0) {
                var n = Gt()(f);
                "" !== n[t] &&
                  (w.current[t - 1].focus(), (n[t - 1] = ""), console.log(n)),
                  (n[t] = ""),
                  h(n.join(""));
              }
            },
            B = Array(r).fill(0);
          return Object(j.jsxs)(u.default, {
            style: { flex: 1, backgroundColor: "white" },
            children: [
              Object(j.jsxs)(u.default, {
                children: [
                  Object(j.jsx)(A.default, {
                    source: n(257),
                    style: {
                      width: "100%",
                      height: 200,
                      resizeMode: "contain",
                    },
                  }),
                  Object(j.jsx)(p.default, {
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
              x
                ? Object(j.jsx)(je.default.View, {
                    style: [tn.errorText, { transform: [{ translateX: O }] }],
                    children: Object(j.jsx)(u.default, {
                      style: tn.container,
                      children: B.map(function (e, t) {
                        return Object(j.jsx)(
                          lt.default,
                          {
                            value: f[t] || "",
                            onChangeText: function (e) {
                              return W(e, t);
                            },
                            maxLength: 1,
                            style: [tn.input, x && tn.inputError],
                            keyboardType: "number-pad",
                            ref: function (e) {
                              w.current[t] = e;
                            },
                            onSubmitEditing: function () {
                              t === r - 1 && w.current[t].blur();
                            },
                            onKeyPress: function (e) {
                              return T(e, t);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : Object(j.jsx)(u.default, {
                    style: tn.container,
                    children: B.map(function (e, t) {
                      return Object(j.jsx)(
                        lt.default,
                        {
                          value: f[t] || "",
                          onChangeText: function (e) {
                            return W(e, t);
                          },
                          maxLength: 1,
                          style: [tn.input, x && tn.inputError],
                          keyboardType: "numeric",
                          ref: function (e) {
                            w.current[t] = e;
                          },
                          onSubmitEditing: function () {
                            t === r - 1 && w.current[t].blur();
                          },
                          onKeyPress: function (e) {
                            return T(e, t);
                          },
                        },
                        t
                      );
                    }),
                  }),
            ],
          });
        },
        rn = n(554),
        on = n(101),
        an = n(343);
      function ln(e) {
        var t = e.navigation,
          n = Object(c.useState)([]),
          r = a()(n, 2),
          o = r[0],
          l = r[1],
          s = Object(c.useState)(!1),
          d = a()(s, 2),
          f = d[0],
          h = d[1],
          b = Object(c.useRef)(null);
        Object(c.useEffect)(
          function () {
            return t.addListener("focus", function () {
              x(1);
            });
          },
          [t]
        ),
          Object(c.useEffect)(function () {
            x(1);
          }, []);
        var x = (function () {
            var e = i()(function* (e) {
              var t = yield te(e);
              l(t.data), h(!0);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          y = (function () {
            var e = i()(function* (e) {
              var t = yield ee(e);
              if (!t.ok) return console.log(t.data);
              x(1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(j.jsxs)(g, {
          children: [
            Object(j.jsx)(Se, {}),
            Object(j.jsx)(u.default, {
              style: { backgroundColor: "#fff", flex: 1 },
              children: Object(j.jsxs)(u.default, {
                style: cn.container,
                children: [
                  Object(j.jsx)(p.default, {
                    style: {
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: 18,
                      fontWeight: "600",
                      paddingVertical: 10,
                    },
                    children: "Wishlisted cars",
                  }),
                  f
                    ? Object(j.jsx)(an.SwipeListView, {
                        showsVerticalScrollIndicator: !1,
                        ref: b,
                        data: o,
                        renderItem: function (e) {
                          return Object(j.jsxs)(m.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                },
                                children: [
                                  Object(j.jsx)(u.default, {
                                    style: { width: 130, height: 115 },
                                    children: Object(j.jsx)(A.default, {
                                      source: e.item.item.images[0],
                                      style: cn.img,
                                    }),
                                  }),
                                  Object(j.jsxs)(u.default, {
                                    style: cn.TextCont,
                                    children: [
                                      Object(j.jsx)(p.default, {
                                        style: cn.imgText,
                                        children: e.item.item.title,
                                      }),
                                      Object(j.jsxs)(p.default, {
                                        style: {
                                          fontSize: 10,
                                          fontWeight: "600",
                                          color: "#bbb",
                                          marginTop: 4,
                                        },
                                        children: ["(", e.item.item.color, ")"],
                                      }),
                                      Object(j.jsx)(p.default, {
                                        style: cn.desc,
                                        children: "Ex-showroom Price /-",
                                      }),
                                      Object(j.jsxs)(p.default, {
                                        style: cn.price,
                                        children: [L(e.item.item.price), " /-"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(u.default, {
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
                                  Object(j.jsx)(on.default, {
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
                                    children: Object(j.jsxs)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      },
                                      children: [
                                        Object(j.jsx)(w.TrashIcon, {
                                          size: 17,
                                          color: "#bbb",
                                        }),
                                        Object(j.jsx)(p.default, {
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
                                  Object(j.jsx)(u.default, {
                                    style: {
                                      height: "100%",
                                      width: 1,
                                      backgroundColor: "#bbb",
                                    },
                                  }),
                                  Object(j.jsx)(on.default, {
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
                                    children: Object(j.jsxs)(u.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      },
                                      children: [
                                        Object(j.jsx)(w.BoltIcon, {
                                          size: 17,
                                          color: "#bbb",
                                        }),
                                        Object(j.jsx)(p.default, {
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
                          return Object(j.jsxs)(u.default, {
                            style: cn.rowBack,
                            children: [
                              Object(j.jsx)(m.default, {
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
                                children: Object(j.jsx)(w.TrashIcon, {
                                  size: 20,
                                  color: "red",
                                }),
                              }),
                              Object(j.jsx)(m.default, {
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
                                children: Object(j.jsx)(w.TrashIcon, {
                                  size: 20,
                                  color: "red",
                                }),
                              }),
                              Object(j.jsx)(m.default, {
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
                                children: Object(j.jsx)(w.ShoppingBagIcon, {
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
                    : Object(j.jsxs)(u.default, {
                        style: { marginTop: 20 },
                        children: [
                          Object(j.jsx)(pe, {}),
                          Object(j.jsx)(pe, {}),
                          Object(j.jsx)(pe, {}),
                        ],
                      }),
                ],
              }),
            }),
          ],
        });
      }
      var cn = l.default.create({
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
          color: z,
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
      function sn(e) {
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
          var n,
            r = Pe()(e);
          if (t) {
            var i = Pe()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Be()(this, n);
        };
      }
      var dn = (function (e) {
          We()(n, e);
          var t = sn(n);
          function n(e) {
            var r;
            return ke()(this, n), ((r = t.call(this, e)).state = {}), r;
          }
          return (
            Ie()(n, [
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(u.default, {
                    style: un.container,
                    children: Object(j.jsx)(ln, {
                      navigation: this.props.navigation,
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        un = l.default.create({
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
            width: ge.default.get("window").width / 3,
          },
        });
      function fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fn(Object(n), !0).forEach(function (t) {
                tt()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var jn = [
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
        gn = function () {
          var e = Object(c.useState)(1),
            t = a()(e, 2),
            n = (t[0], t[1], Object(c.useState)(jn)),
            r = a()(n, 2),
            i = r[0],
            o = r[1],
            l = function (e, t) {
              var n = i.map(function (n) {
                return (
                  console.log(e),
                  e === n.id
                    ? hn(
                        hn({}, n),
                        {},
                        tt()(
                          {},
                          "count",
                          "plus" === t ? n.count + 1 : n.count - 1
                        )
                      )
                    : n
                );
              });
              o(n);
            };
          return Object(j.jsxs)(u.default, {
            style: { backgroundColor: "white", flex: 1 },
            children: [
              Object(j.jsxs)(u.default, {
                style: { flex: 1 },
                children: [
                  Object(j.jsx)(u.default, {
                    children: Object(j.jsx)(p.default, {
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
                  Object(j.jsx)(E.default, {
                    data: i,
                    keyExtractor: function (e) {
                      return e.id;
                    },
                    renderItem: function (e) {
                      var t = e.item;
                      return Object(j.jsxs)(u.default, {
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              paddingHorizontal: 20,
                              paddingVertical: 15,
                              justifyContent: "space-between",
                            },
                            children: [
                              Object(j.jsxs)(u.default, {
                                style: { flexDirection: "row" },
                                children: [
                                  Object(j.jsx)(A.default, {
                                    style: {
                                      width: 70,
                                      height: 70,
                                      marginRight: 20,
                                    },
                                    source: { uri: t.img },
                                  }),
                                  Object(j.jsxs)(u.default, {
                                    style: { justifyContent: "space-between" },
                                    children: [
                                      Object(j.jsx)(p.default, {
                                        style: {
                                          color: "#A0A0A0",
                                          fontWeight: "600",
                                          fontSize: 11,
                                          textAlign: "left",
                                          width: 180,
                                        },
                                        children: t.title,
                                      }),
                                      Object(j.jsx)(p.default, {
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
                              Object(j.jsxs)(u.default, {
                                style: {
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                },
                                children: [
                                  Object(j.jsx)(O.TrashIcon, {
                                    style: { alignSelf: "flex-end" },
                                    color: "#484848",
                                    size: 20,
                                  }),
                                  Object(j.jsxs)(u.default, {
                                    style: {
                                      flexDirection: "row",
                                      alignItems: "center",
                                    },
                                    children: [
                                      Object(j.jsx)(m.default, {
                                        onPress: function () {
                                          l(t.id, "plus");
                                        },
                                        children: Object(j.jsx)(
                                          O.PlusCircleIcon,
                                          { color: "#484848", size: 20 }
                                        ),
                                      }),
                                      Object(j.jsx)(p.default, {
                                        style: {
                                          fontSize: 20,
                                          paddingHorizontal: 5,
                                          fontWeight: "400",
                                        },
                                        children: t.count,
                                      }),
                                      Object(j.jsx)(m.default, {
                                        onPress: function () {
                                          l(t.id, "minus");
                                        },
                                        children: Object(j.jsx)(
                                          O.MinusCircleIcon,
                                          { color: "#484848", size: 20 }
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(j.jsx)(u.default, {
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
              Object(j.jsxs)(u.default, {
                style: { margin: 20 },
                children: [
                  Object(j.jsx)(p.default, {
                    style: {
                      fontSize: 16,
                      color: "#484848",
                      fontWeight: "600",
                    },
                    children: "Bill Details",
                  }),
                  Object(j.jsxs)(u.default, {
                    style: { margin: 20 },
                    children: [
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                        },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "Amount",
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "\u20b94563",
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "GST",
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "453",
                          }),
                        ],
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "Discount",
                          }),
                          Object(j.jsx)(p.default, {
                            style: {
                              color: "#797979",
                              fontSize: 12,
                              fontWeight: 600,
                            },
                            children: "-153",
                          }),
                        ],
                      }),
                      Object(j.jsx)(u.default, {
                        style: {
                          height: 2,
                          width: "70%",
                          alignSelf: "center",
                          backgroundColor: "#E0E0E0",
                          marginTop: 10,
                        },
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        },
                        children: [
                          Object(j.jsx)(p.default, {
                            style: {
                              fontSize: 16,
                              color: "#484848",
                              fontWeight: "600",
                            },
                            children: "Total Amount",
                          }),
                          Object(j.jsx)(p.default, {
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
                  Object(j.jsx)(u.default, {
                    style: {
                      width: "70%",
                      height: 35,
                      backgroundColor: "#0D4C92",
                      justifyContent: "center",
                      alignSelf: "center",
                    },
                    children: Object(j.jsx)(p.default, {
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
        bn = (l.default.create({}), n(532)),
        xn = n(205),
        yn = Object(x.default)(),
        pn = function () {
          return Object(j.jsxs)(yn.Navigator, {
            children: [
              Object(j.jsx)(yn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "CartList",
                component: dn,
              }),
              Object(j.jsx)(yn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "details",
                component: $e,
              }),
              Object(j.jsx)(yn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "ebookscreen",
                component: Nt,
              }),
            ],
          });
        },
        mn = n(330),
        On = n.n(mn),
        wn = function () {
          return Object(j.jsx)(u.default, {
            children: Object(j.jsx)(p.default, { children: "AddAddress" }),
          });
        },
        Sn = (l.default.create({}), Object(x.default)()),
        Cn = function () {
          return Object(j.jsxs)(Sn.Navigator, {
            children: [
              Object(j.jsx)(Sn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "profile",
                component: it,
              }),
              Object(j.jsx)(Sn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "addressbook",
                component: On.a,
              }),
              Object(j.jsx)(Sn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "addaddress",
                component: wn,
              }),
            ],
          });
        },
        vn = Object(rn.default)();
      function kn() {
        return Object(j.jsxs)(vn.Navigator, {
          children: [
            Object(j.jsx)(vn.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(j.jsx)(bn.default, {
                    name: "home",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Home",
              component: Vn,
            }),
            Object(j.jsx)(vn.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(j.jsx)(bn.default, {
                    name: "shoppingcart",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Cart",
              component: pn,
            }),
            Object(j.jsx)(vn.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(j.jsx)(xn.default, {
                    name: "favorite-border",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "Payment",
              component: gn,
            }),
            Object(j.jsx)(vn.Screen, {
              options: {
                tabBarIcon: function () {
                  return Object(j.jsx)(bn.default, {
                    name: "user",
                    size: 24,
                    color: "black",
                  });
                },
                headerShown: !1,
              },
              name: "profile",
              component: Cn,
            }),
          ],
        });
      }
      var zn = Object(x.default)(),
        In = function () {
          return Object(j.jsxs)(zn.Navigator, {
            children: [
              Object(j.jsx)(zn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "login",
                component: Kt,
              }),
              Object(j.jsx)(zn.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "conformPinScreen",
                component: $t,
              }),
              Object(j.jsx)(zn.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "conformForgotPin",
                component: en,
              }),
              Object(j.jsx)(zn.Screen, {
                options: { statusBarColor: "white", statusBarStyle: "dark" },
                name: "Enter Your Pin",
                component: nn,
              }),
              Object(j.jsx)(zn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "app",
                component: kn,
              }),
            ],
          });
        },
        Rn = n(334),
        Wn = n.n(Rn),
        Tn = [
          "http://superapi.kalyanicrm.com/media/store/images/10_KY3vlyo.jpg",
          "http://superapi.kalyanicrm.com/media/store/images/1_ZiZCPmy.jpg",
          "http://superapi.kalyanicrm.com/media/store/images/5_vZDybZv.jpg",
        ],
        Bn = ge.default.get("window").width - 20,
        Dn = function (e) {
          var t = e.route,
            n = (e.title, Object(ft.useNavigation)()),
            r = Object(c.useState)([]),
            o = a()(r, 2),
            l = o[0],
            s = o[1],
            d = Object(c.useState)(!1),
            f = a()(d, 2),
            h = f[0],
            g = f[1],
            b = Object(c.useState)(0),
            x = a()(b, 2),
            y = x[0],
            O = x[1],
            w = Object(c.useState)([]),
            S = a()(w, 2),
            C = S[0],
            v = S[1],
            k = Object(c.useState)(!1),
            z = a()(k, 2),
            I = z[0],
            R = z[1],
            W = Object(c.useState)({}),
            T = a()(W, 2),
            B = T[0],
            D = T[1];
          Object(c.useEffect)(function () {
            P(t.params.secid);
          }, []);
          var P = function (e) {
              fetch(
                "http://superapi.kalyanicrm.com/showcases/get_itemdesc/" + e
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  s(e), g(!0), V(t.params.activeId);
                });
            },
            V = function (e) {
              fetch(
                "http://superapi.kalyanicrm.com/showcases/get_dist_itemdesc/" +
                  e
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  g(!0);
                  var n = e.filter(function (e) {
                    return e.id !== t.params.secid;
                  });
                  v(n);
                });
            },
            L = (function () {
              var e = i()(function* (e) {
                var t = yield Q({ profile: 1, item: e });
                D(t.data), R(!0);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            H = (function () {
              var e = i()(function* (e) {
                yield ee(e);
                R(!1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(
              function () {
                var e = setInterval(function () {
                  O(y === Tn.length - 1 ? 0 : y + 1);
                }, 3e3);
                return function () {
                  return clearInterval(e);
                };
              },
              [y]
            ),
            Object(j.jsx)(j.Fragment, {
              children: h
                ? Object(j.jsxs)(u.default, {
                    style: {
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: "red",
                    },
                    children: [
                      Object(j.jsx)(u.default, {
                        style: {
                          borderRadius: 10,
                          marginTop: 15,
                          backgroundColor: "white",
                          shadowColor: "gray",
                          shadowOpacity: 0.26,
                          shadowOffset: { width: 0, height: 2 },
                          shadowRadius: 12,
                          elevation: 3,
                          backgroundColor: "#fff",
                        },
                        children: Object(j.jsx)(Wn.a, {
                          useNativeDriver: !0,
                          autoplay: !0,
                          autoplayTimeout: 3e3,
                          loop: !0,
                          showsPageIndicator: !1,
                          index: y,
                          pageSize: Bn,
                          onPageChanged: function (e) {
                            return O(e);
                          },
                          children: Tn.map(function (e, t) {
                            return (function (e, t) {
                              return Object(j.jsx)(
                                u.default,
                                {
                                  children: Object(j.jsx)(A.default, {
                                    style: { width: Bn, height: 200 },
                                    source: { uri: e },
                                  }),
                                },
                                t
                              );
                            })(e, t);
                          }),
                        }),
                      }),
                      Object(j.jsxs)(u.default, {
                        style: {
                          width: "97%",
                          borderRadius: 5,
                          marginTop: 5,
                          backgroundColor: "white",
                          shadowColor: "gray",
                          shadowOpacity: 0.26,
                          shadowOffset: { width: 0, height: 2 },
                          shadowRadius: 12,
                          elevation: 3,
                          padding: 10,
                        },
                        children: [
                          Object(j.jsxs)(u.default, {
                            style: { padding: 10 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: {
                                  fontSize: 15,
                                  fontWeight: "700",
                                  color: "green",
                                },
                                children: "Price Start From",
                              }),
                              Object(j.jsx)(p.default, {
                                style: { fontSize: 25, fontWeight: "700" },
                                children: "Rs.5000/-",
                              }),
                            ],
                          }),
                          Object(j.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              justifyContent: "space-around",
                              marginTop: 5,
                            },
                            children: [
                              I
                                ? Object(j.jsx)(m.default, {
                                    style: {
                                      backgroundColor: "green",
                                      padding: 10,
                                      width: "49%",
                                      borderRadius: 10,
                                      textAlign: "center",
                                    },
                                    onPress: function () {
                                      return H(B.id);
                                    },
                                    children: Object(j.jsx)(p.default, {
                                      style: {
                                        color: "white",
                                        fontSize: 14,
                                        fontWeight: "600",
                                      },
                                      children: "Wishlist Added",
                                    }),
                                  })
                                : Object(j.jsx)(m.default, {
                                    style: {
                                      backgroundColor: "#F74300",
                                      padding: 10,
                                      width: "49%",
                                      borderRadius: 10,
                                      textAlign: "center",
                                    },
                                    onPress: function () {
                                      return L(l[0].id);
                                    },
                                    children: Object(j.jsx)(p.default, {
                                      style: {
                                        color: "white",
                                        fontSize: 14,
                                        fontWeight: "600",
                                      },
                                      children: "Add Wishlist",
                                    }),
                                  }),
                              Object(j.jsx)(m.default, {
                                style: {
                                  backgroundColor: "#F74300",
                                  padding: 10,
                                  width: "49%",
                                  borderRadius: 10,
                                  textAlign: "center",
                                },
                                onPress: function () {
                                  return n.navigate("ebookscreen", t.params);
                                },
                                children: Object(j.jsx)(p.default, {
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
                          Object(j.jsxs)(u.default, {
                            style: { padding: 10 },
                            children: [
                              Object(j.jsx)(p.default, {
                                style: {
                                  fontSize: 20,
                                  fontWeight: "700",
                                  color: "black",
                                },
                                children: l[0].title,
                              }),
                              Object(j.jsx)(p.default, {
                                style: {
                                  marginTop: 5,
                                  fontSize: 13,
                                  fontWeight: 600,
                                  lineHeight: 20,
                                  color: "rgb(103, 121, 135)",
                                },
                                children: l[0].description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(j.jsx)(u.default, {
                        style: {
                          width: "97%",
                          borderRadius: 5,
                          marginTop: 5,
                          shadowColor: "gray",
                          shadowOpacity: 0.26,
                          shadowOffset: { width: 0, height: 2 },
                          shadowRadius: 12,
                          elevation: 3,
                        },
                        children: h
                          ? Object(j.jsxs)(u.default, {
                              children: [
                                Object(j.jsx)(p.default, {
                                  style: {
                                    padding: 15,
                                    fontSize: 20,
                                    fontWeight: 700,
                                  },
                                  children: "Related Products",
                                }),
                                Object(j.jsx)(E.default, {
                                  showsHorizontalScrollIndicator: !1,
                                  horizontal: !0,
                                  data: C,
                                  renderItem: function (e) {
                                    var n = e.item,
                                      r = e.index;
                                    return Object(j.jsx)(u.default, {
                                      children: Object(j.jsx)(ht, {
                                        data: C,
                                        index: r,
                                        item: n,
                                        activeId: t.params.activeId,
                                      }),
                                    });
                                  },
                                }),
                              ],
                            })
                          : null,
                      }),
                    ],
                  })
                : null,
            })
          );
        },
        Pn = Object(x.default)(),
        Vn = function () {
          return Object(j.jsxs)(Pn.Navigator, {
            children: [
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "main",
                component: He,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "models",
                component: Me,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "All Cars",
                component: Me,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Arena",
                component: Me,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Nexa",
                component: Me,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "varients",
                component: Ye,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "details",
                component: $e,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "editProfile",
                component: Dt,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Used Cars",
                component: Rt,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "searchCar",
                component: Vt,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "ebookscreen",
                component: Nt,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "ServiceDetails",
                component: Dn,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "thankyou",
                component: at,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Insurance",
                component: st,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "Service",
                component: bt,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "insuranceScreen",
                component: ut,
              }),
              Object(j.jsx)(Pn.Screen, {
                options: {
                  headerShown: !1,
                  statusBarColor: "white",
                  statusBarStyle: "dark",
                },
                name: "AuthNav",
                component: Kt,
              }),
            ],
          });
        },
        En = we.createURL("/");
      (t.default = function () {
        var e = Object(c.useState)({}),
          t = a()(e, 2),
          n = (t[0], t[1]),
          r = Object(c.useState)(!1),
          o = a()(r, 2),
          l = o[0],
          s = o[1],
          u = Object(c.useState)(""),
          f = a()(u, 2),
          h = f[0],
          g = f[1];
        Object(c.useEffect)(function () {
          g(window.location.href + "/Token_Attached"), x();
        }, []);
        var b = { prefixes: [En] },
          x = (function () {
            var e = i()(function* () {
              try {
                var e = yield S.default.getItem("userCredential");
                if (null !== e) {
                  var t = JSON.parse(e);
                  console.log(t), n(t), y(t);
                }
              } catch (r) {
                console.log(r);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          y = (function () {
            var e = i()(function* (e) {
              var t = e.phone,
                n = e.password;
              if (!(yield oe({ phone: t, password: n })).ok)
                return console.log("Something Went wrong...");
              s(!0);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          p = h.split("/");
        try {
          S.default.setItem(
            "userToken",
            JSON.stringify({ token: p[p.length - 1] })
          );
        } catch (m) {
          console.log(m);
        }
        return Object(j.jsx)(d.default, {
          linking: b,
          children: l ? Object(j.jsx)(kn, {}) : Object(j.jsx)(In, {}),
        });
      }),
        l.default.create({});
    },
    353: function (e, t, n) {
      e.exports = n(531);
    },
    419: function (e, t) {},
    430: function (e, t, n) {
      e.exports = n.p + "static/media/profile_img.74b452e4.jpeg";
    },
    503: function (e, t, n) {
      e.exports = n.p + "static/media/insurance.08ccf5d9.jpeg";
    },
    504: function (e, t, n) {
      e.exports = n.p + "static/media/lineart.532f5f57.jpeg";
    },
    511: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec1_2.f8c7de44.jpeg";
    },
    512: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec1_3.104be7d6.jpeg";
    },
    513: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec2_1.b70990ef.jpeg";
    },
    514: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec2_2.e69ceb22.jpeg";
    },
    515: function (e, t, n) {
      e.exports = n.p + "static/media/sellpage_sec2_3.47511b4f.jpeg";
    },
    516: function (e, t, n) {
      e.exports = n.p + "static/media/Noimage.026ef1a4.png";
    },
    517: function (e, t, n) {
      e.exports = n.p + "static/media/no_record.6ad77992.jpg";
    },
    518: function (e, t, n) {
      e.exports = n.p + "static/media/index.e1151974.png";
    },
  },
  [[353, 1, 2]],
]);
//# sourceMappingURL=app.3d5ceb94.chunk.js.map
