import os

pages = ['about.html', 'reviews.html', 'offers.html', 'faq.html', 'privacy.html', 'terms.html']
template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | AAR Royal Residency</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/themes.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>
    <div id="navbar-container"></div>
    <main class="container section">
        <h1>{title}</h1>
        <p>Content for {title} will go here.</p>
    </main>
    <div id="footer-container"></div>
    <script src="js/main.js"></script>
    <script src="js/navbar.js"></script>
</body>
</html>"""

for p in pages:
    title = p.split('.')[0].replace('-', ' ').title()
    with open(p, 'w') as f:
        f.write(template.replace('{title}', title))

print("Created pages.")
