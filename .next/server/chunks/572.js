"use strict";
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 6572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "flowbite-react"
var external_flowbite_react_ = __webpack_require__(7532);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./layouts/Header/index.jsx






function Header() {
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    const [open2, setOpen2] = external_react_default().useState(false);
    const handleOpen2 = ()=>{
        setOpen2(!open2);
    };
    const [open3, setOpen3] = external_react_default().useState(false);
    const handleOpen3 = ()=>{
        setOpen3(!open3);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "sticky shadow-xl",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: " py-2 sm:py-2 md:py-3 lg:py-4  flex justify-between  items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "inline-block lg:w-[130px] lg:h-[33px]",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/logo-vnpt12.jpg",
                            width: 130,
                            height: 33,
                            className: "w-auto",
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar, {
                        fluid: true,
                        className: "flex-row lg:flex gap-8 md:hidden hidden text-xs font-family: Arial",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_flowbite_react_.Navbar.Collapse, {
                            className: "flex-row lg:flex gap-8 text-xs font-family: Arial",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar.Link, {
                                    className: "text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2",
                                    href: "/",
                                    children: "Trang Chủ"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar.Link, {
                                    className: "text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2",
                                    href: "/internet-ca-nhan",
                                    children: "Internet C\xe1 Nh\xe2n"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-sm hover:bg-gray-100 text-gray-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_flowbite_react_.Dropdown, {
                                            label: "Internet Combo",
                                            inline: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200",
                                                        href: "/internet-truyen-hinh",
                                                        children: "Internet & Truyền H\xecnh"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200",
                                                        href: "/internet-va-di-dong",
                                                        children: "Internet Combo"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar.Toggle, {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar.Link, {
                                    className: "text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2",
                                    href: "/internet-doanh-nghiep",
                                    children: "Internet Doanh Nghiệp"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-sm hover:bg-gray-100 text-gray-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_flowbite_react_.Dropdown, {
                                            label: "Kh\xe1c",
                                            inline: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block",
                                                        href: "/lien-he",
                                                        children: "Li\xean Hệ"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block",
                                                        href: "/chinhsachbaomat",
                                                        children: "Ch\xednh s\xe1ch bảo mật"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_flowbite_react_.Navbar.Toggle, {})
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "max-w-2xl lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            class: "border-gray-200",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "container mx-auto flex flex-wrap items-center justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: handleOpen,
                                            class: "lg:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "sr-only",
                                                    children: "Open main menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    class: "w-10 h-10",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    class: "hidden w-10 h-10",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        }),
                                        open ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "#",
                                                        class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                        href: "/",
                                                        children: "Trang chủ"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "#",
                                                        class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                        href: "/internet-ca-nhan",
                                                        children: "Internet C\xe1 Nh\xe2n"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                onClick: handleOpen3,
                                                                className: "text-center inline-flex justify-center items-center px-4",
                                                                type: "button",
                                                                "data-dropdown-toggle": "dropdown",
                                                                children: [
                                                                    "Internet Combo",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        class: "w-4 h-4 m-0",
                                                                        "aria-hidden": "true",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            "stroke-linecap": "round",
                                                                            "stroke-linejoin": "round",
                                                                            "stroke-width": "2",
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            open3 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "internet-truyen-hinh",
                                                                            class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                                            children: "Internet & Truyền H\xecnh"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "internet-va-di-dong",
                                                                            class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                                            children: "Internet Combo"
                                                                        })
                                                                    })
                                                                ]
                                                            }) : null
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "#",
                                                        class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                        href: "/internet-doanh-nghiep",
                                                        children: "Internet Doanh Nghiệp"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                onClick: handleOpen2,
                                                                className: "text-center inline-flex justify-center items-center px-4",
                                                                type: "button",
                                                                "data-dropdown-toggle": "dropdown",
                                                                children: [
                                                                    "Kh\xe1c",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        class: "w-4 h-4 ml-1",
                                                                        "aria-hidden": "true",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            "stroke-linecap": "round",
                                                                            "stroke-linejoin": "round",
                                                                            "stroke-width": "2",
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            open2 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "lien-he",
                                                                            class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                                            children: "Li\xean Hệ"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "chinhsachbaomat",
                                                                            class: "text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                                                            children: "Ch\xednh s\xe1ch bảo mật"
                                                                        })
                                                                    })
                                                                ]
                                                            }) : null
                                                        ]
                                                    })
                                                })
                                            ]
                                        }) : null
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const layouts_Header = (Header);

// EXTERNAL MODULE: ./utils/zalo.js
var zalo = __webpack_require__(1091);
;// CONCATENATED MODULE: ./layouts/Footer/index.jsx





function Footer() {
    const link = (0,zalo/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-main p-0 md:p-2 text-white bg-[#1E73BE]",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid lg:grid-cols-3 md:grid-col-3 grid-cols-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "uppercase text-lg md:text-2xl mb-1 font-bold",
                                    children: "Th\xf4ng tin li\xean hệ"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "flex flex-col gap-2 text-sm md:text-lg ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Website của NVKD: Phạm Quang Linh"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Ph\xf2ng b\xe1n h\xe0ng: Khu vực S\xe0i G\xf2n"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Địa chỉ: 121 Pasteur, Phường V\xf5 Thị S\xe1u, Quận 3, Th\xe0nh phố Hồ Ch\xed Minh"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Điện thoại li\xean hệ: 0815117116"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Email: linhpq.hcm@vnpt.com"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "hidden md:block",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "uppercase text-lg md:text-2xl mb-1 font-bold",
                                    children: "Sản phẩm - Dịch vụ"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "flex flex-col gap-2 text-sm md:text-lg ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "hover:translate-x-3 transition-all",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/internet-ca-nhan",
                                                children: "Internet C\xe1 Nh\xe2n"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "hover:translate-x-3 transition-all",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/internet-truyen-hinh",
                                                children: "Internet & Truyền H\xecnh"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "hover:translate-x-3 transition-all",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/internet-va-di-dong",
                                                children: "Internet Combo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "hover:translate-x-3 transition-all",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/internet-doanh-nghiep",
                                                children: "Internet Doanh Nghiệp"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "uppercase text-lg md:text-2xl mb-1 font-bold",
                                    children: "Về ch\xfang t\xf4i"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "flex flex-col gap-2 text-sm md:text-lg ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Chi Nh\xe1nh Tổng C\xf4ng Ty Dịch Vụ Viễn Th\xf4ng"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Giấy ph\xe9p kinh doanh số: 0106869738-005 do Sở KHĐT cấp ng\xe0y 21/07/2015"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Địa chỉ: 121 Pasteur, Phường V\xf5 Thị S\xe1u, Quận 3, Th\xe0nh phố Hồ Ch\xed Minh"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "hover:translate-x-3 transition-all",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/chinhsachbaomat",
                                                children: "Ch\xednh s\xe1ch bảo mật"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "fixed bottom-12 right-10 z-50",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: link,
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "animate-bounce hover:opacity-70 transtion-all mb-4",
                            src: "/zl.png",
                            width: 44,
                            height: 44,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "tel:0815117116",
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "hover:opacity-70 transtion-all",
                            src: "/telephone.png",
                            width: 44,
                            height: 44,
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const layouts_Footer = (Footer);

;// CONCATENATED MODULE: ./layouts/Footerzeo/index.jsx





function Footerzeo_Footer() {
    const link = (0,zalo/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-gray-500 p-0 md:p-1 text-white bg-[#1E73BE]",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid lg:grid-cols-3 md:grid-col-3 grid-cols-1",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "flex flex-col gap-2 text-sm md:text-lg ",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                "Copyright \xa9 2023 ",
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "VNPT"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Footerzeo = (Footerzeo_Footer);

;// CONCATENATED MODULE: ./layouts/Layout.jsx





function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layouts_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(layouts_Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Footerzeo, {})
        ]
    });
}
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LinkZalo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LinkZalo() {
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, []);
    return link;
}


/***/ })

};
;