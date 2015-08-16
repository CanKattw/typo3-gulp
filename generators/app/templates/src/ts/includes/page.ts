page = PAGE
page.config {
  doctype = html5
  htmlTag_langKey = de-DE
  htmlTag_setParams = lang="de-DE" dir="ltr" class="no-js"
  language = de
  locale_all = de_DE
  spamProtectEmailAddresses = 1

}
page.meta.viewport  = width=device-width, initial-scale=1
page.shortcutIcon = fileadmin/template/img/favicon.ico

page.10 = TEMPLATE
page.10.template = FILE
page.10.template.file = fileadmin/template/index.html
page.10.workOnSubpart = DOCUMENT_BODY

page.headerData.10 = TEXT
page.headerData.10.value (
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
)
TCAdefaults.tt_content.image_zoom = 1

page.footerData.999 = TEXT
page.footerData.999.value (
    <script src="/fileadmin/template/app.js" defer></script>
)
page.includeCSS {
  file1 = /fileadmin/template/style.css
}

// only while dev start
config.no_cache = 1
// only while dev end