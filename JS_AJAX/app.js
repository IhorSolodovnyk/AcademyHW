const getPageContent = async (url) => {
    const res = await fetch ('./parts/$(url).html')
    return res;
}

const body = await getPageContent('home');

