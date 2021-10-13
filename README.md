# m4ss1ck-components

_AN NPM PACKAGE FOR MY REACT COMPONENTS_

Here I'll store my react components in order to reuse them in future projects. TailwindCSS is used for styling

## **Usage**

```sh
npm install m4ss1ck-components
```

Currently there are 2 components:

- Navbar
- Footer

### **Navbar**

This navbar is based on the first example [from this page](https://tailwindui.com/components/application-ui/navigation/navbars), but customizable with props.

In order to use it, you'll need to declare:

1. **Logo (optional):** business logo

```js
const logo = { src: logobig, src_small: logosmall, alt: "Logo" };
```

- **src:** url of logo image for desktop
- **src_small:** url of logo image for mobile
- **alt:** name for screen readers

2. **Navigation (mandatory):** navigation links

```js
const navigation = [
  { name: "page1", href: "/page1", current: true },
  { name: "page2", href: "/page2", current: false },
  { name: "page3", href: "/page3", current: false },
  { name: "get rich right now", href: "/scam", current: false },
];
```

- **name:** display name
- **href:** address
- **current:** active link

3. **Profile (optional):** top-right menu with user avatar

```js
const profile = {
  src: my - cute - face.jpg,
  alt: "profile pic",
  menu: [
    { link: "/bio", name: "My bio" },
    { link: "/guns", name: "My guns" },
    { link: "/music", name: "My soundcloud" },
  ],
};
```

- **src:** avatar url
- **alt:** name for screen readers
- **menu:** dropdown menu with links
- **link:** address
- **name:** display name

4. **Notification:** PENDING

### **Footer**
