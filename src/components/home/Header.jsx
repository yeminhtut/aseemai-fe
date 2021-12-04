import { Fragment, useEffect } from "react";

const HeaderComponent = props => {
    return (
        <header className="navbar-solid cs-header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky">
                <div className="container px-0 px-xl-3">
                    <button
                        className="navbar-toggler ml-n2 mr-2"
                        type="button"
                        data-toggle="offcanvas"
                        data-offcanvas-id="primaryMenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a
                        href="https://around.madrasthemes.com/"
                        className="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4 d-none d-lg-block logo-link"
                        rel="home"
                    >
                        <img
                            width="306"
                            height="110"
                            src="https://around.madrasthemes.com/wp-content/uploads/2021/01/logo-dark.png"
                            className="navbar-brand-img d-none d-lg-block"
                            alt="Around"
                        />
                    </a>
                    <a
                        href="https://around.madrasthemes.com/"
                        className="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4 d-lg-none"
                        rel="home"
                        style={{ width: "58px" }}
                    >
                        <img
                            width="116"
                            height="110"
                            src="https://around.madrasthemes.com/wp-content/uploads/2021/02/logo-icon.png"
                            className="d-lg-none"
                            alt="Around"
                            loading="lazy"
                        />
                    </a>
                    <div className="d-flex align-items-center order-lg-3 ml-lg-auto">
                        <a
                            className="nav-link-style font-size-sm text-nowrap"
                            href="#modal-signin"
                            data-toggle="modal"
                            data-view="#modal-signin-view"
                        >
                            <i className="fe-user font-size-xl mr-1"></i>
                            Sign in{" "}
                        </a>
                        <a
                            className="btn btn-primary ml-grid-gutter d-none d-lg-inline-block"
                            href="#modal-signin"
                            data-toggle="modal"
                            data-view="#modal-signup-view"
                        >
                            Sign up
                        </a>
                    </div>
                    <div
                        className="cs-offcanvas-collapse order-lg-2"
                        id="primaryMenu"
                    >
                        <div className="cs-offcanvas-cap navbar-box-shadow">
                            <h5 className="mt-1 mb-0">Menu</h5>
                            <button
                                className="close lead"
                                type="button"
                                data-toggle="offcanvas"
                                data-offcanvas-id="primaryMenu"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="cs-offcanvas-body">
                            <ul
                                id="menu-primary-menu"
                                className="navbar-nav ml-auto flex-wrap"
                            >
                                <li
                                    id="menu-item-3035"
                                    className="dropdown menu-item-3035 nav-item"
                                >
                                    <a
                                        title="Demos"
                                        href="https://around.madrasthemes.com/booking-directory/"
                                        className="dropdown-toggle  nav-link"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="menu-item-dropdown-3035"
                                    >
                                        Demos
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-mega p-0 mt-0 mt-md-20"
                                        aria-labelledby="menu-item-dropdown-3035"
                                        role="menu"
                                    >
                                        <li>
                                            <div
                                                data-elementor-type="wp-post"
                                                data-elementor-id="16880"
                                                className="elementor elementor-16880"
                                                data-elementor-settings="[]"
                                            >
                                                <div className="elementor-section-wrap">
                                                    <div
                                                        className="elementor-section elementor-top-section elementor-element elementor-element-c11bdca elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                        data-id="c11bdca"
                                                        data-element_type="section"
                                                    >
                                                        <div className="elementor-container elementor-column-gap-default">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-82807f2 p-0"
                                                                data-id="82807f2"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                    <div
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-6554064 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="6554064"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default flex-column flex-lg-row flex-nowrap  ">
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9c93e2f p-0 rounded-left dropdown-column dropdown-column-img bg-secondary d-none d-lg-block"
                                                                                data-id="9c93e2f"
                                                                                data-element_type="column"
                                                                                data-settings='{"background_background":"classNameic"}'
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-614aa6d elementor-widget elementor-widget-image"
                                                                                        data-id="614aa6d"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="image.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <a
                                                                                                    href="https://around.madrasthemes.com/"
                                                                                                    target="_blank"
                                                                                                >
                                                                                                    <img
                                                                                                        width="480"
                                                                                                        height="580"
                                                                                                        src="https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner.jpg"
                                                                                                        className="img-fluid rounded-left attachment-large size-large"
                                                                                                        alt=""
                                                                                                        loading="lazy"
                                                                                                        srcset="https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner.jpg 480w, https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner-248x300.jpg 248w, https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner-20x24.jpg 20w, https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner-30x36.jpg 30w, https://around.madrasthemes.com/wp-content/uploads/2021/03/menu-banner-40x48.jpg 40w"
                                                                                                        sizes="(max-width: 480px) 100vw, 480px"
                                                                                                    />{" "}
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3106d79 dropdown-column"
                                                                                data-id="3106d79"
                                                                                data-element_type="column"
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-8b5144b elementor-widget elementor-widget-ar-nav-menu"
                                                                                        data-id="8b5144b"
                                                                                        data-element_type="widget"
                                                                                        data-settings='{"layout":"vertical"}'
                                                                                        data-widget_type="ar-nav-menu.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <nav className="ar-elementor-nav-menu--main ar-elementor-nav-menu__container ar-elementor-nav-menu--layout-vertical">
                                                                                                <ul
                                                                                                    id="menu-1-8b5144b"
                                                                                                    className="ar-elementor-nav-menu list-inline font-size-sm "
                                                                                                >
                                                                                                    <li className="px-0  mb-0 menu-item-19909">
                                                                                                        <a
                                                                                                            title="Web Template Presentation"
                                                                                                            href="https://around.madrasthemes.com/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Web
                                                                                                            Template
                                                                                                            Presentation
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19910">
                                                                                                        <a
                                                                                                            title="Business Consulting"
                                                                                                            href="https://around.madrasthemes.com/demo-business-consulting/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Business
                                                                                                            Consulting
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19911">
                                                                                                        <a
                                                                                                            title="Demo Shop Homepage"
                                                                                                            href="https://around.madrasthemes.com/demo-shop-homepage/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Demo
                                                                                                            Shop
                                                                                                            Homepage
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19912">
                                                                                                        <a
                                                                                                            title="Creative Agency"
                                                                                                            href="https://around.madrasthemes.com/demo-creative-agency/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Creative
                                                                                                            Agency
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19913">
                                                                                                        <a
                                                                                                            title="Web Studio"
                                                                                                            href="https://around.madrasthemes.com/demo-web-studio/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Web
                                                                                                            Studio
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19914">
                                                                                                        <a
                                                                                                            title="Product Landing – Software"
                                                                                                            href="https://around.madrasthemes.com/demo-product-software/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                            aria-current="page"
                                                                                                        >
                                                                                                            Product
                                                                                                            Landing
                                                                                                            –
                                                                                                            Software
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-19915">
                                                                                                        <a
                                                                                                            title="Product Landing – Gadgets"
                                                                                                            href="https://around.madrasthemes.com/demo-product-gadget/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Product
                                                                                                            Landing
                                                                                                            –
                                                                                                            Gadgets
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </nav>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f8f5b6a dropdown-column mt-4 mt-lg-0 mb-4 mb-lg-0"
                                                                                data-id="f8f5b6a"
                                                                                data-element_type="column"
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-b517bfb elementor-widget elementor-widget-ar-nav-menu"
                                                                                        data-id="b517bfb"
                                                                                        data-element_type="widget"
                                                                                        data-settings='{"layout":"vertical"}'
                                                                                        data-widget_type="ar-nav-menu.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <nav className="ar-elementor-nav-menu--main ar-elementor-nav-menu__container ar-elementor-nav-menu--layout-vertical">
                                                                                                <ul
                                                                                                    id="menu-1-b517bfb"
                                                                                                    className="ar-elementor-nav-menu list-inline font-size-sm "
                                                                                                >
                                                                                                    <li className="px-0  mb-0 menu-item-16919">
                                                                                                        <a
                                                                                                            title="Mobile App Showcase"
                                                                                                            href="https://around.madrasthemes.com/demo-mobile-app/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Mobile
                                                                                                            App
                                                                                                            Showcase
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-16921">
                                                                                                        <a
                                                                                                            title="Coworking Space"
                                                                                                            href="https://around.madrasthemes.com/demo-coworking-space/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Coworking
                                                                                                            Space
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-16922">
                                                                                                        <a
                                                                                                            title="Event Landing"
                                                                                                            href="https://around.madrasthemes.com/demo-event-landing/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Event
                                                                                                            Landing
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-16923">
                                                                                                        <a
                                                                                                            title="Digital Marketing &amp; SEO"
                                                                                                            href="https://around.madrasthemes.com/demo-marketing-seo/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Digital
                                                                                                            Marketing
                                                                                                            &amp;
                                                                                                            SEO
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-16924">
                                                                                                        <a
                                                                                                            title="Food Blog"
                                                                                                            href="https://around.madrasthemes.com/demo-food-blog/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Food
                                                                                                            Blog
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-16925">
                                                                                                        <a
                                                                                                            title="Personal Portfolio"
                                                                                                            href="https://around.madrasthemes.com/demo-personal-portfolio/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Personal
                                                                                                            Portfolio
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </nav>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-3036"
                                    className="dropdown menu-item-3036 nav-item"
                                >
                                    <a
                                        title="Templates"
                                        href="#"
                                        className="dropdown-toggle  nav-link"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="menu-item-dropdown-3036"
                                    >
                                        Templates
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-mega p-0 mt-0 mt-md-20"
                                        aria-labelledby="menu-item-dropdown-3036"
                                        role="menu"
                                    >
                                        <li>
                                            <div
                                                data-elementor-type="wp-post"
                                                data-elementor-id="13350"
                                                className="elementor elementor-13350"
                                                data-elementor-settings="[]"
                                            >
                                                <div className="elementor-section-wrap">
                                                    <div
                                                        className="elementor-section elementor-top-section elementor-element elementor-element-b1cdab9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                        data-id="b1cdab9"
                                                        data-element_type="section"
                                                    >
                                                        <div className="elementor-container elementor-column-gap-default">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e45c3ba"
                                                                data-id="e45c3ba"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-c1ed152 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="c1ed152"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default flex-column flex-lg-row flex-nowrap  ">
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2405b80 dropdown-column mb-2 mb-lg-0"
                                                                                data-id="2405b80"
                                                                                data-element_type="column"
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-e83c0c4 mb-0 elementor-widget elementor-widget-heading"
                                                                                        data-id="e83c0c4"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="heading.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="around-elementor-heading__title dropdown-header mb-1 pb-2 default elementor-heading-title elementor-size-default">
                                                                                                Blog
                                                                                            </h2>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-b381da2 elementor-widget elementor-widget-ar-nav-menu"
                                                                                        data-id="b381da2"
                                                                                        data-element_type="widget"
                                                                                        data-settings='{"layout":"vertical"}'
                                                                                        data-widget_type="ar-nav-menu.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <nav className="ar-elementor-nav-menu--main ar-elementor-nav-menu__container ar-elementor-nav-menu--layout-vertical">
                                                                                                <ul
                                                                                                    id="menu-1-b381da2"
                                                                                                    className="ar-elementor-nav-menu list-inline font-size-sm "
                                                                                                >
                                                                                                    <li className="px-0  mb-0 menu-item-14051">
                                                                                                        <a
                                                                                                            title="Grid Right Sidebar"
                                                                                                            href="https://around.madrasthemes.com/grid-right-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Right
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14050">
                                                                                                        <a
                                                                                                            title="Grid Left Sidebar"
                                                                                                            href="https://around.madrasthemes.com/grid-left-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Left
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14052">
                                                                                                        <a
                                                                                                            title="Grid No Sidebar"
                                                                                                            href="https://around.madrasthemes.com/grid-no-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            No
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14055">
                                                                                                        <a
                                                                                                            title="List Right Sidebar"
                                                                                                            href="https://around.madrasthemes.com/list-right-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            List
                                                                                                            Right
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14054">
                                                                                                        <a
                                                                                                            title="List Left Sidebar"
                                                                                                            href="https://around.madrasthemes.com/list-left-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            List
                                                                                                            Left
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14053">
                                                                                                        <a
                                                                                                            title="List No Sidebar"
                                                                                                            href="https://around.madrasthemes.com/list-no-sidebar/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            List
                                                                                                            No
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14061">
                                                                                                        <a
                                                                                                            title="Single Post Right Sidebar"
                                                                                                            href="https://around.madrasthemes.com/blog/2021/02/25/designers-should-always-keep-their-users-in-mind/?blog_sidebar=right-sidebar"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Single
                                                                                                            Post
                                                                                                            Right
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14062">
                                                                                                        <a
                                                                                                            title="Single Post Left Sidebar"
                                                                                                            href="https://around.madrasthemes.com/blog/2021/02/25/designers-should-always-keep-their-users-in-mind/?blog_sidebar=left-sidebar"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Single
                                                                                                            Post
                                                                                                            Left
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14063">
                                                                                                        <a
                                                                                                            title="Single Post No Sidebar"
                                                                                                            href="https://around.madrasthemes.com/blog/2021/02/25/designers-should-always-keep-their-users-in-mind/?blog_sidebar=no-sidebar"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Single
                                                                                                            Post
                                                                                                            No
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </nav>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6fd64bb dropdown-column mb-2 mb-lg-0"
                                                                                data-id="6fd64bb"
                                                                                data-element_type="column"
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-6d6f18c mb-0 elementor-widget elementor-widget-heading"
                                                                                        data-id="6d6f18c"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="heading.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <h5 className="around-elementor-heading__title dropdown-header pb-2 mb-1 default elementor-heading-title elementor-size-default">
                                                                                                Portfolio
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-d0d07d0 elementor-widget elementor-widget-ar-nav-menu"
                                                                                        data-id="d0d07d0"
                                                                                        data-element_type="widget"
                                                                                        data-settings='{"layout":"vertical"}'
                                                                                        data-widget_type="ar-nav-menu.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <nav className="ar-elementor-nav-menu--main ar-elementor-nav-menu__container ar-elementor-nav-menu--layout-vertical">
                                                                                                <ul
                                                                                                    id="menu-1-d0d07d0"
                                                                                                    className="ar-elementor-nav-menu list-inline font-size-sm "
                                                                                                >
                                                                                                    <li className="px-0  mb-0 menu-item-14070">
                                                                                                        <a
                                                                                                            title="Grid Style 1"
                                                                                                            href="https://around.madrasthemes.com/portfolio-style-1/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Style
                                                                                                            1
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14071">
                                                                                                        <a
                                                                                                            title="Grid Style 2"
                                                                                                            href="https://around.madrasthemes.com/portfolio-style-2/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Style
                                                                                                            2
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14072">
                                                                                                        <a
                                                                                                            title="Grid Style 3"
                                                                                                            href="https://around.madrasthemes.com/portfolio-style-3/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Style
                                                                                                            3
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14167">
                                                                                                        <a
                                                                                                            title="Project Side Gallery (Grid)"
                                                                                                            href="https://around.madrasthemes.com/portfolio/tooth-product/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Project
                                                                                                            Side
                                                                                                            Gallery
                                                                                                            (Grid)
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14804">
                                                                                                        <a
                                                                                                            title="Project Side Gallery (List)"
                                                                                                            href="https://around.madrasthemes.com/portfolio/list/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Project
                                                                                                            Side
                                                                                                            Gallery
                                                                                                            (List)
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14846">
                                                                                                        <a
                                                                                                            title="Project Carousel"
                                                                                                            href="https://around.madrasthemes.com/portfolio/toothbrush-product-design-3d/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Project
                                                                                                            Carousel
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14899">
                                                                                                        <a
                                                                                                            title="Project Wide Gallery"
                                                                                                            href="https://around.madrasthemes.com/portfolio/toothbrush-product-design-3d-2/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Project
                                                                                                            Wide
                                                                                                            Gallery
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </nav>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-963836e dropdown-column mb-2 mb-lg-0"
                                                                                data-id="963836e"
                                                                                data-element_type="column"
                                                                            >
                                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-4294503 mb-0 elementor-widget elementor-widget-heading"
                                                                                        data-id="4294503"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="heading.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <h5 className="around-elementor-heading__title dropdown-header pb-2 mb-1 default elementor-heading-title elementor-size-default">
                                                                                                Shop
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-8cd68c6 elementor-widget elementor-widget-ar-nav-menu"
                                                                                        data-id="8cd68c6"
                                                                                        data-element_type="widget"
                                                                                        data-settings='{"layout":"vertical"}'
                                                                                        data-widget_type="ar-nav-menu.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <nav className="ar-elementor-nav-menu--main ar-elementor-nav-menu__container ar-elementor-nav-menu--layout-vertical">
                                                                                                <ul
                                                                                                    id="menu-1-8cd68c6"
                                                                                                    className="ar-elementor-nav-menu list-inline font-size-sm "
                                                                                                >
                                                                                                    <li className="px-0  mb-0 menu-item-14064">
                                                                                                        <a
                                                                                                            title="Grid Left Sidebar"
                                                                                                            href="https://around.madrasthemes.com/shop/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Left
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14065">
                                                                                                        <a
                                                                                                            title="Grid Right Sidebar"
                                                                                                            href="https://around.madrasthemes.com/shop/?shop_sidebar=right-sidebar&amp;shop_columns=3"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            Right
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14066">
                                                                                                        <a
                                                                                                            title="Grid No Sidebar"
                                                                                                            href="https://around.madrasthemes.com/shop/?shop_sidebar=full-width&amp;shop_columns=4"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Grid
                                                                                                            No
                                                                                                            Sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14067">
                                                                                                        <a
                                                                                                            title="Single Product"
                                                                                                            href="https://around.madrasthemes.com/product/sport-running-sneakers/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Single
                                                                                                            Product
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14068">
                                                                                                        <a
                                                                                                            title="Cart"
                                                                                                            href="https://around.madrasthemes.com/cart/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Cart
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14069">
                                                                                                        <a
                                                                                                            title="Checkout"
                                                                                                            href="https://around.madrasthemes.com/checkout/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Checkout
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="px-0  mb-0 menu-item-14155">
                                                                                                        <a
                                                                                                            title="Order Tracking"
                                                                                                            href="https://around.madrasthemes.com/order-tracking/"
                                                                                                            className="nav-link-style  dropdown-item px-0 nav-link ar-elementor-item"
                                                                                                        >
                                                                                                            Order
                                                                                                            Tracking
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </nav>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-3037"
                                    className="dropdown menu-item-3037 nav-item"
                                >
                                    <a
                                        title="Account"
                                        href="https://around.madrasthemes.com/my-account/"
                                        className="dropdown-toggle  nav-link"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="menu-item-dropdown-3037"
                                    >
                                        Account
                                    </a>
                                    <ul
                                        className="dropdown-menu "
                                        aria-labelledby="menu-item-dropdown-3037"
                                        role="menu"
                                    >
                                        <li
                                            id="menu-item-16204"
                                            className="dropright dropdown menu-item-16204"
                                        >
                                            <a
                                                title="Dashboard"
                                                href="https://around.madrasthemes.com/my-account/"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-16204"
                                            >
                                                Dashboard
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-16204"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-16205"
                                                    className="menu-item-16205"
                                                >
                                                    <a
                                                        title="Orders"
                                                        href="https://around.madrasthemes.com/my-account/orders/"
                                                        className="dropdown-item"
                                                    >
                                                        Orders
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-16207"
                                                    className="menu-item-16207"
                                                >
                                                    <a
                                                        title="Favorites"
                                                        href="https://around.madrasthemes.com/my-account/yith-my-wishlist/"
                                                        className="dropdown-item"
                                                    >
                                                        Favorites
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-16208"
                                            className="dropright dropdown menu-item-16208"
                                        >
                                            <a
                                                title="Account Settings"
                                                href="https://around.madrasthemes.com/my-account/"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-16208"
                                            >
                                                Account Settings
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-16208"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-16209"
                                                    className="menu-item-16209"
                                                >
                                                    <a
                                                        title="Profile Info"
                                                        href="https://around.madrasthemes.com/my-account/edit-account/"
                                                        className="dropdown-item"
                                                    >
                                                        Profile Info
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-16210"
                                            className="menu-item-16210"
                                        >
                                            <a
                                                title="Sign In-Illustration"
                                                href="https://around.madrasthemes.com/signin-illustration/"
                                                className="dropdown-item"
                                            >
                                                Sign In-Illustration
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16211"
                                            className="menu-item-16211"
                                        >
                                            <a
                                                title="Sign In – Image"
                                                href="https://around.madrasthemes.com/signin-image/"
                                                className="dropdown-item"
                                            >
                                                Sign In – Image
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16222"
                                            className="menu-item-16222"
                                        >
                                            <a
                                                title="Sign In – Sign Up"
                                                href="https://around.madrasthemes.com/signin-signup/"
                                                className="dropdown-item"
                                            >
                                                Sign In – Sign Up
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16298"
                                            className="menu-item-16298"
                                        >
                                            <a
                                                title="Password Recovery"
                                                href="https://around.madrasthemes.com/password-recovery/"
                                                className="dropdown-item"
                                            >
                                                Password Recovery
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-3038"
                                    className="dropdown menu-item-3038 nav-item"
                                >
                                    <a
                                        title="Pages"
                                        href="#"
                                        className="dropdown-toggle  nav-link"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="menu-item-dropdown-3038"
                                    >
                                        Pages
                                    </a>
                                    <ul
                                        className="dropdown-menu "
                                        aria-labelledby="menu-item-dropdown-3038"
                                        role="menu"
                                    >
                                        <li
                                            id="menu-item-16991"
                                            className="menu-item-16991"
                                        >
                                            <a
                                                title="About"
                                                href="https://around.madrasthemes.com/about/"
                                                className="dropdown-item"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16992"
                                            className="dropright dropdown menu-item-16992"
                                        >
                                            <a
                                                title="Contacts"
                                                href="#"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-16992"
                                            >
                                                Contacts
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-16992"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-16993"
                                                    className="menu-item-16993"
                                                >
                                                    <a
                                                        title="Contacts v.1"
                                                        href="https://around.madrasthemes.com/contact-v1/"
                                                        className="dropdown-item"
                                                    >
                                                        Contacts v.1
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-16994"
                                                    className="menu-item-16994"
                                                >
                                                    <a
                                                        title="Contacts v.2"
                                                        href="https://around.madrasthemes.com/contact-v2/"
                                                        className="dropdown-item"
                                                    >
                                                        Contacts v.2
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-16995"
                                                    className="menu-item-16995"
                                                >
                                                    <a
                                                        title="Contacts v.3"
                                                        href="https://around.madrasthemes.com/contact-v3/"
                                                        className="dropdown-item"
                                                    >
                                                        Contacts v.3
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-16996"
                                            className="dropright dropdown menu-item-16996"
                                        >
                                            <a
                                                title="Help Center"
                                                href="https://around.madrasthemes.com/help-center/"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-16996"
                                            >
                                                Help Center
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-16996"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-16997"
                                                    className="menu-item-16997"
                                                >
                                                    <a
                                                        title="Help Topics"
                                                        href="https://around.madrasthemes.com/help-center/"
                                                        className="dropdown-item"
                                                    >
                                                        Help Topics
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-16998"
                                                    className="menu-item-16998"
                                                >
                                                    <a
                                                        title="Single Topic"
                                                        href="https://around.madrasthemes.com/help-center/docs/affiliate-program/what-are-the-benefits-of-creating-account/"
                                                        className="dropdown-item"
                                                    >
                                                        Single Topic
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-16999"
                                                    className="menu-item-16999"
                                                >
                                                    <a
                                                        title="Submit a Request"
                                                        href="https://around.madrasthemes.com/help-center/docs/affiliate-program/submit-request/"
                                                        className="dropdown-item"
                                                    >
                                                        Submit a Request
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-17000"
                                            className="dropright dropdown menu-item-17000"
                                        >
                                            <a
                                                title="404 Not Found"
                                                href="#"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-17000"
                                            >
                                                404 Not Found
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-17000"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-17002"
                                                    className="menu-item-17002"
                                                >
                                                    <a
                                                        title="Simple Text"
                                                        href="https://around.madrasthemes.com/404notfound/?404_style=style-v1"
                                                        className="dropdown-item"
                                                    >
                                                        Simple Text
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-17004"
                                                    className="menu-item-17004"
                                                >
                                                    <a
                                                        title="Illustration"
                                                        href="https://around.madrasthemes.com/404notfound/?404_style=style-v2"
                                                        className="dropdown-item"
                                                    >
                                                        Illustration
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-17013"
                                            className="dropright dropdown menu-item-17013"
                                        >
                                            <a
                                                title="Coming Soon"
                                                href="https://around.madrasthemes.com/coming-soon-illustration/"
                                                className="dropdown-toggle dropdown-item"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="menu-item-dropdown-17013"
                                            >
                                                Coming Soon
                                            </a>
                                            <ul
                                                className="dropdown-menu "
                                                aria-labelledby="menu-item-dropdown-17013"
                                                role="menu"
                                            >
                                                <li
                                                    id="menu-item-18104"
                                                    className="menu-item-18104"
                                                >
                                                    <a
                                                        title="Image"
                                                        href="https://around.madrasthemes.com/coming-soon-image-2/"
                                                        className="dropdown-item"
                                                    >
                                                        Image
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-18108"
                                                    className="menu-item-18108"
                                                >
                                                    <a
                                                        title="Illustration"
                                                        href="https://around.madrasthemes.com/coming-soon-illustration/"
                                                        className="dropdown-item"
                                                    >
                                                        Illustration
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-3039"
                                    className="dropdown menu-item-3039 nav-item"
                                >
                                    <a
                                        title="Docs / Support"
                                        href="#"
                                        className="dropdown-toggle  nav-link"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="menu-item-dropdown-3039"
                                    >
                                        Docs / Support
                                    </a>
                                    <ul
                                        className="dropdown-menu "
                                        aria-labelledby="menu-item-dropdown-3039"
                                        role="menu"
                                    >
                                        <li
                                            id="menu-item-16946"
                                            className="menu-item-16946"
                                        >
                                            <a
                                                title="Documentation"
                                                target="_blank"
                                                href="https://docs.madrasthemes.com/around"
                                                className="dropdown-item"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="font-size-xl text-muted">
                                                        <i
                                                            className="fe-file-text mr-1"
                                                            aria-hidden="true"
                                                        ></i>{" "}
                                                    </div>
                                                    <div className="pl-2">
                                                        Documentation
                                                        <small className="d-block text-muted">
                                                            Kick-start
                                                            customization
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-17517"
                                            className="menu-item-17517"
                                        >
                                            <div className="dropdown-divider">
                                                divider
                                            </div>
                                        </li>
                                        <li
                                            id="menu-item-16947"
                                            className="menu-item-16947"
                                        >
                                            <a
                                                title="Request Trial"
                                                target="_blank"
                                                href="https://themeforest.net/user/madrasthemes/portfolio"
                                                className="dropdown-item"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="font-size-xl text-muted">
                                                        <i
                                                            className="fe-layers mr-1"
                                                            aria-hidden="true"
                                                        ></i>{" "}
                                                    </div>
                                                    <div className="pl-2">
                                                        Request Trial
                                                        <small className="d-block text-muted">
                                                            Trial before
                                                            Purchase
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16958"
                                            className="menu-item-16958"
                                        >
                                            <div className="dropdown-divider">
                                                DIvider
                                            </div>
                                        </li>
                                        <li
                                            id="menu-item-16948"
                                            className="menu-item-16948"
                                        >
                                            <a
                                                title="Changelog"
                                                target="_blank"
                                                href="https://themeforest.net/user/madrasthemes/portfolio"
                                                className="dropdown-item"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="font-size-xl text-muted">
                                                        <i
                                                            className="fe-edit mr-1"
                                                            aria-hidden="true"
                                                        ></i>{" "}
                                                    </div>
                                                    <div className="pl-2">
                                                        Changelog
                                                        <small className="d-block text-muted">
                                                            Regular updates
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-16959"
                                            className="menu-item-16959"
                                        >
                                            <div className="dropdown-divider">
                                                Divider
                                            </div>
                                        </li>
                                        <li
                                            id="menu-item-16949"
                                            className="menu-item-16949"
                                        >
                                            <a
                                                title="Support"
                                                target="_blank"
                                                href="https://themeforest.net/user/madrasthemes/portfolio"
                                                className="dropdown-item"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="font-size-xl text-muted">
                                                        <i
                                                            className="fe-life-buoy mr-1"
                                                            aria-hidden="true"
                                                        ></i>{" "}
                                                    </div>
                                                    <div className="pl-2">
                                                        Support
                                                        <small className="d-block text-muted">
                                                            Get Help from Our
                                                            Team
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default HeaderComponent
