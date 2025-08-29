async function fetchNews() {
    const response = await fetch('news.txt');
    const text = await response.text();
    return text.split('\n').filter(line => line.trim() !== '');
}

async function startTicker() {
    const newsItems = await fetchNews();

    // Create span elements for each news item
    const tickerContent1 = newsItems.map(item => `<span>${item}</span>`).join('');
    const tickerContent2 = tickerContent1; // Duplicate for the second ticker

    // Set both news content elements
    document.getElementById('newsContent1').innerHTML = tickerContent1;
    document.getElementById('newsContent2').innerHTML = tickerContent2;

    // Set the width of both tickers based on the content length
    const contentWidth = document.getElementById('newsContent1').scrollWidth; // Get the full width of the content
    document.getElementById('newsContent1').style.width = `${contentWidth}px`;
    document.getElementById('newsContent2').style.width = `${contentWidth}px`;

    // Calculate and set the animation duration based on the content width
    const tickerContainerWidth = document.getElementById('ticker-container').offsetWidth;
    const speed = 50; // Speed in pixels per second
    const duration = (contentWidth / speed) + 's'; // Calculate duration based on speed
    document.getElementById('newsContent1').style.animationDuration = duration;
    document.getElementById('newsContent2').style.animationDuration = duration;
}

startTicker();
