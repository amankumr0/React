import { RenderCustom } from "./customLib.js"

const ReactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "blank"
    },
    children: 'click here to visit google'
}

RenderCustom(ReactElement)

