{
  search:[
    {
      type: 'file',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.file a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.file h4',
        expression:'element.textContent'
      },
      description:{
        selector:'.file p',
        expression:'element.textContent'
      },
      link:{
        selector:'.file a.ui-link-inherit',
        expression:'element.getAttribute("href")'
      }
    },
    {
      type: 'link',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.folder a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.folder h4',
        expression:'element.textContent'
      },
      link:{
        selector:'.folder a.ui-link-inherit',
        expression:'"https://dropbox.com"+element.getAttribute("href")'
      }
    }
  ]
}