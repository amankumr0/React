
export const RenderCustom = (ReactElement) => {
    const rootEle = document.querySelector('#root');

    const childEle = document.createElement(ReactElement.type);

    for (const key in ReactElement.props) {
        if (key === 'children') continue
        childEle.setAttribute(key, ReactElement.props[key])
    }

    childEle.innerHTML = ReactElement.children
    rootEle.appendChild(childEle)
}



