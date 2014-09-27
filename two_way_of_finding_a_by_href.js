URL_WE_WANT = '/path/to/';//on dev, sandbox, stage
URL_WE_WANT = 'http://domain/path/to/';//on release, live

$('body').find('a[href^='+URL_WE_WANT.replace(/\//g,'\\/').replace(/:/g,'\\:').replace(/\./g,'\\.')+']');//consider that // : /

$('body').find('a[href^="'+URL_WE_WANT+'"]');//make it simple



