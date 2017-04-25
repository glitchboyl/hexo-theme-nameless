
'use strict';
(function(global) {
    //  Self introduction.
    (function() {
        var a = '─────────▄──────────────▄\r\n' +
            '────────▌▒█───────────▄▀▒▌\r\n' +
            '────────▌▒▒▀▄───────▄▀▒▒▒▐\r\n' +
            '───────▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐\r\n' +
            '─────▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐\r\n' +
            '───▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌\r\n' +
            '──▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌\r\n' +
            '──▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐\r\n' +
            '─▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌\r\n' +
            '─▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌\r\n' +
            '─▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐\r\n' +
            '▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌\r\n' +
            '▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐\r\n' +
            '─▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌\r\n' +
            '─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐\r\n' +
            '──▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌\r\n' +
            '────▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀\r\n' +
            '───▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀\r\n' +
            '──▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀      如果你对我的博客网站有好的建议或者感兴趣的话, 欢迎联系我。\r\n';
        console.log('%c' + a, 'color:#2DB4D8;');
    })();
    //  All links binding PJAX.
    (function() {
        _Pjax('a:not([target])', '.content-container');
        if (_Ls('.nav a')) {
            _LS(_Ls('.nav a')).forEach(function(that) {
                that.onclick = function() {
                    _LS(_Ls('.nav a.active')).removeClass('active');
                    _LS(this).addClass('active');
                };
            });
        };
    })();

    //  Some trick.
    (function() {
        LProgress.afterDone = changeActive;
        _Ls('.back-to-top .button').onclick = function(e) {
            var T = setInterval(function() {
                document.body.scrollTop = document.body.scrollTop - 100;
                document.body.scrollTop < 0 ? document.body.scrollTop = 0 : '';
                document.body.scrollTop == 0 ? clearTimeout(T) : '';
            }, 10);
        };
        _Ls('.back-to-top .button').onmouseover = function() {
            if (navigator.userAgent.indexOf('Trident') != -1 || navigator.userAgent.indexOf('Edge') != -1) {
                _Ls('.back-to-top .tip').style.cssText = 'display: block; opacity: 1; visibility: visible';
                console.log(_Ls('.back-to-top .tip').style.cssText);
                this.onmouseout = function() {
                    _Ls('.back-to-top .tip').style.cssText = 'display: none; opacity: 0; visibility: hidden';
                };
            } else {
                _LS(_Ls('.back-to-top .tip')).fadeIn(300);
                this.onmouseout = function() {
                    _LS(_Ls('.back-to-top .tip')).fadeOut(300);
                };
            };
        };
        _LS(_Ls('.social-networks .item')).forEach(function(item) {
            item.onmouseover = function() {
                if (_LS(_LS(this).parent()).child('.tip')) {
                    var tip = _LS(_LS(this).parent()).child('.tip');
                    _LS(tip).fadeIn(300);
                    this.onmouseout = function() {
                        _LS(tip).fadeOut(300);
                    };
                };
            };
        });
        _LS(global).on('resize', adapt);

        function adapt() {
            if (window.innerWidth <= 600) {
                if (!_Ls('.nav-container .nav-button')) {
                    _Create('span', {
                        'class': 'nav-button'
                    }, _Ls('.nav-container'));
                };
                _Ls('.nav-container .nav-button').onclick = function(e) {
                    _LS(this).toggleClass('active');
                    _LS(_Ls('.nav-container .nav')).toggleClass('open');
                    SB();
                };
                document.onclick = function() {
                    !_LS(_Ls('.nav-container .nav-button')).hasClass('active') ? {} : _LS(_Ls('.nav-container .nav-button')).removeClass('active');
                    !_LS(_Ls('.nav-container .nav')).hasClass('open') ? {} : _LS(_Ls('.nav-container .nav')).removeClass('open');
                };
            } else {
                if (_Ls('.nav-container .nav .nav-button')) {
                    _LS(_Ls('.nav-container .nav .nav-button')).remove();
                };
                !_LS(_Ls('.nav-container .nav')).hasClass('open') ? {} : _LS(_Ls('.nav-container .nav')).removeClass('open');
            };
        };
        adapt();
    })();

    global.onpopstate = function(e) {
        _Config.page = 1;
    };
    _LS(global).on('scroll', function(e) {
        if ((document.body.scrollTop >= 256 && navigator.userAgent.indexOf('FireFox') == -1) || (document.documentElement.scrollTop >= 256 && navigator.userAgent.indexOf('Firefox') != -1)) {
            !_LS(_Ls('.navbar-container')).hasClass('is-locked') ? (_LS(_Ls('.navbar-container')).addClass('is-locked'), _Ls('.content-container').style.cssText += 'margin-top: 49px;') : '';
            if (_LS(_Ls('.back-to-top')).css('display') == 'none' || _LS(_Ls('.back-to-top')).css('visibility') == 'hidden') {
                _Ls('.back-to-top').style.cssText += 'visibility: visible; opacity: 1; display: block';
            };
        } else {
            !_LS(_Ls('.navbar-container')).hasClass('is-locked') ? '' : (_LS(_Ls('.navbar-container')).removeClass('is-locked'), _LS(_Ls('.content-container')).removeStyle('margin-top'));
            if (_LS(_Ls('.back-to-top')).css('display') == 'block' && _LS(_Ls('.back-to-top')).css('visibility') == 'visible') {
                _Ls('.back-to-top').style.cssText += 'visibility: hidden; opacity: 0; display: none';
            };
        };
        if (reachBottom()) {
            if (_Config.page == _Config.maxPage || (location.pathname != '/' && location.pathname != '/index.html')) {
                return;
            };
            LProgress.start();
            _Config.page += 1;
            setTimeout(function() {
                _Ajax({
                    url: '/page/' + _Config.page + '/',
                    success: function(r) {
                        var container = _Create('html', {
                            'innerHTML': r
                        });
                        var lm = _LS(_Ls('.articles-container .loading-more')).clone();
                        _LS(_Ls('.articles-container .loading-more')).remove();
                        if (_Config.page == _Config.maxPage) {
                            _LS(lm).removeClass('loading-more').addClass('no-more');
                            lm.innerHTML = '没有更多了.';
                        };
                        _Ls('.articles-container').innerHTML += _LS(container).child('.articles-container').innerHTML + lm.outerHTML;
                        _Pjax('.content-container a:not([target])', '.content-container');
                        _LS(_Ls('.content-container a:not([target])')).forEach(function(that) {
                            that.onclick = function() {
                                _Config.page = 1;
                            };
                        });
                        LProgress.done();
                    },
                    error: function(error) {
                        console.error('Failed to load !');
                    }
                });
            }, 1000);
        };

        function reachBottom() {
            var scrollTop = 0;
            var clientHeight = 0;
            var scrollHeight = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body.scrollTop) {
                scrollTop = document.body.scrollTop;
            };
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
            } else {;
                clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
            };
            scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            if (scrollTop + clientHeight >= scrollHeight - 110) {
                return true;
            } else {
                return false;
            };
        };
    });

    function changeActive() {
        if (/[^\d]/.test(window.location.pathname.replace('/', '').split('/')[0]) == false || window.location.pathname.replace(/\//g, '') == 'about') {
            try {
                if (_Ls('.comments-container') && _Ls('.comments-container').innerHTML == '') {
                    DISQUS.reset({
                        reload: true
                    });
                };
            } catch (err) {
                console.error('Disqus评论加载失败.');
            };
        };
        if (_Ls('.nav a.active')) {
            _LS(_Ls('.nav a.active')).removeClass('active');
        };
        switch (window.location.pathname.replace('/', '').replace(/\d/g, '').split('/')[0]) {
            case '':
                _LS(_Ls('.nav-item.home')).addClass('active');
                break;
            case 'archives':
                _LS(_Ls('.nav-item.archives')).addClass('active');
                break;
            case 'tags':
                _LS(_Ls('.nav-item.tags')).addClass('active');
                break;
            case 'links':
                _LS(_Ls('.nav-item.links')).addClass('active');
                break;
            case 'about':
                _LS(_Ls('.nav-item.about')).addClass('active');
                break;
            default:
                break;
        };
    };
})(this);
