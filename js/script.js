
function typePype(t, getDiv, setDiv, resText, speed, coef, btn) {
    let i = 0;
    let text = t;
    function typing() {
        if (i < text.length){
            getDiv.innerHTML += text.charAt(i);
            i++;
            if (i === text.length) {
                restext = setDiv;
                restext.innerHTML = resText;
                if (btn){
                    btn.removeAttribute('disabled');
                    btn.classList.add('visible');
                }
            }
            setTimeout(typing, getRandomInt(getRandomInt(speed * coef)));
        }
    }
    typing();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

typePype('import requests\n\nAPI_URL = "◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼"\n\nresponse = requests.get(API_URL)\nprint(response.json()["python_knowledge"])', document.getElementById('step_one_text'), document.getElementById('step_one_restext'), '{<br><p class="text_indent">"language": ["basic",],</p><p class="text_indent">"frameworks": ["basic Django", "basic Django Rest Framework"],</p><p class="text_indent">"used_packages": ["requests", "pandas", "scapy", "smtplib", "imaplib", "tkinter", "BeautifulSoup4", "re", "selenium", "socket", "subprocess", "sys", "etc."],</p>}', 250, 1.5, btn_step_two);

btn_step_two.onclick = function () {
    typePype('print(response.json()["web_development_experience"])', document.getElementById('step_two_text'), document.getElementById('step_two_restext'), '{<br><p class="text_indent">"Constructors": ["Tilda", "WordPress(Elementor, etc.)"],</p><p class="text_indent">"HTML": ["full",],</p><p class="text_indent">"CSS": ["pure", "SCSS", "bootstrap5"],</p><p class="text_indent">"JS": ["pure basic",],</p><p class="text_indent">"Php": ["pure basic", "1c-bitrix basic"],</p><p class="text_indent">"Python": ["basic Django", "basic Django Rest Framework"],</p>}', 250, 1.5, btn_step_three);
    step_two_text.classList.add('visible');
    step_one_text.classList.add('non-typed');
    btn_step_two.setAttribute('disabled', true);
};

btn_step_three.onclick = function () {
    typePype('print(response.json()["mobile_development_experience"])', document.getElementById('step_three_text'), document.getElementById('step_three_restext'), '{<br><p class="text_indent">"language": ["Java basic",],</p><p class="text_indent">"used_packages_and_technologies": ["Picasso/Glide", "RecyclerView", "Retrofit2", "Gson", "DataBinding", "ViewModel", "Room", "Material design + xml layouts", "MVVM", "etc."],</p>}', 250, 1.5, btn_step_four);
    step_three_text.classList.add('visible');
    step_two_text.classList.add('non-typed');
    btn_step_three.setAttribute('disabled', true);
};

btn_step_four.onclick = function () {
    typePype('print(response.json()["other_it_experience"])', document.getElementById('step_four_text'), document.getElementById('step_four_restext'), '{<br><p class="text_indent">"Setting up contextual advertising": ["Yandex.Direct","Google Ads"],</p><p class="text_indent">"operating systems used": ["Windows", "Fedora 32, 33", "Kali linux", "etc."],</p>}', 250, 1.5, btn_step_five);
    step_four_text.classList.add('visible');
    step_three_text.classList.add('non-typed');
    btn_step_four.setAttribute('disabled', true);
};

btn_step_five.onclick = function () {
    typePype('print(response.json()["other_not_it_experience_and_background"])', document.getElementById('step_five_text'), document.getElementById('step_five_restext'), '{<br><p class="text_indent">"Work experience": ["Commercial","Management", "Electricity"],</p><p class="text_indent">"interests": ["Family", "Sport(powerlifting + chess)", "IT sphere", "etc."],</p><p class="text_indent">"resume": ["<a href="https://kirov.hh.ru/resume/dfcf8191ff08bd689d0039ed1f4b4e33516430" target="_blank">my resume on hh.ru</a>",],</p>}', 250, 1.5);
    step_five_text.classList.add('visible');
    step_four_text.classList.add('non-typed');
    btn_step_five.setAttribute('disabled', true);
};