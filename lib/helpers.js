exports.addGithubCSS = function (user, repo, path, options) {
    var css = this.githubCSS || (this.githubCSS = []),
        url = 'http://rawgithub.com/' + [user, repo, path].join('/');

    options = (options && options.hash) || {};
    css[options.prepend ? 'unshift' : 'push'](url);
};

exports.addCdnCSS = function (version, module, options) {
    var css = this.cdnCSS || (this.cdnCSS = []),
        url = [version, 'build', module, module + '.css'].join('/');

    options = (options && options.hash) || {};
    css[options.prepend ? 'unshift' : 'push'](url);
};

exports.cdnCSSURL = function () {
    var urls = this.cdnCSS,
        url  = null;

    if (urls.length) {
        url = 'http://yui.yahooapis.com/combo?' + urls.join('&');
    }

    return url;
};

exports.code = function (options) {
    return '' + options.fn(this);
};

exports.activeNav = function (id) {
    var nav = [];

    this.nav.forEach(function (item) {
        var newItem = {};

        Object.keys(item).forEach(function (key) {
            newItem[key] = item[key];
        });

        if (newItem.id === id) {
            newItem.isActive = true;
        }

        nav.push(newItem);
    });

    this.nav = nav;
};