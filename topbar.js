fetch('https://9client.xyz/topbar.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('topbar').innerHTML = data;
            });