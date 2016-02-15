['1', '2', '3', '4'].length
{{arr|length}}

['1', '2', '3', '4'].slice(0, 2)
{% for item in arr|slice(0, 2) %}{{item}} {% endfor %}

'1;2;3;4'.split(';')
{{str|split(';')}}

for i in range(1,5)
{% for i in range(1,5) %}
{{loop.index}}: {{i}}
{% endfor %}