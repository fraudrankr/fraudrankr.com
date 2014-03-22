---
title: Get started
---

# Get Started

## Pageview events

Copy-and-paste the following JavaScript snippet onto your site just before `</head>`.

```html
<script type="text/javascript">
window.FraudRankr = {
  publishable_key: '<apikey>'
  user: '<user@example.com>'
};
(function() {
  function kickFraudRankr() {
    var d = document, f = d.createElement('script');
    f.type = 'text/javascript';
    f.async = true;
    f.src = (d.location.protocol == 'https:' ? 'https' : 'http') \
            + '://c.fraudrankr.com/resources/t.js';
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(f, s);
    }
    if (a = window.attachEvent) {
      a('onload', kickFraudRankr);
    } else {
      window.addEventListener('load', kickFraudRankr, false);
    }
})();
</script>
```

## Transaction events

```bash
echo '{
    "apikey": "<apikey>",
    "user_id": "1234",
    "transaction_id": "ab1cd2-1234-5678",
    "label": "chargeback",
    "reason": "30"
}'
curl -X POST -d - https://c.fraudrankr.com/labels
```
