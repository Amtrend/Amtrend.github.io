
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

typePype('import requests\n\nAPI_URL = "◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼"\n\nresponse = requests.get(API_URL)\nprint(response.json()["web_development_experience"])', document.getElementById('step_one_text'), document.getElementById('step_one_restext'), '{<br><p class="text_indent">"backend python frameworks": ["advanced Odoo", "advanced Django", "intermediate Django Rest Framework", "basic Flask"],</p><p class="text_indent">"Go backend": ["pure basic", "gorilla", "chi", "fizz"],</p><p class="text_indent">"frontend frameworks": ["Owl intermediate", "Vue basic"],</p><p class="text_indent">"HTML": ["full advanced"],</p><p class="text_indent">"CSS": ["pure advanced", "SCSS basic", "bootstrap5"],</p><p class="text_indent">"JS": ["pure intermediate"],</p><p class="text_indent">"Php": ["pure basic", "1c-bitrix basic"],</p><p class="text_indent">"Kid`s constructors": ["Tilda", "WordPress(Elementor, etc.)"],</p><p class="text_indent">"Deployment experience": ["Docker advanced", "Kubernetes basic", "etc."],</p>}', 500, 0.1, btn_step_two);
// typePype('import requests\n\nAPI_URL = "◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼"\n\nresponse = requests.get(API_URL)\nprint(response.json()["python_knowledge"])', document.getElementById('step_one_text'), document.getElementById('step_one_restext'), '{<br><p class="text_indent">"Language": ["advanced"],</p><p class="text_indent">"Used packages": ["requests", "pandas", "scapy", "smtplib", "imaplib", "tkinter", "BeautifulSoup4", "celery", "re", "selenium", "socket", "subprocess", "sys", "etc."],</p>}', 500, 0.1, btn_step_two);

btn_step_two.onclick = function () {
    typePype('print(response.json()["devops_experience"])', document.getElementById('step_two_text'), document.getElementById('step_two_restext'), '{<br><p class="text_indent">"Version control system": ["Git advanced"],</p><p class="text_indent">"Organization of code storage and delivery": ["Gitlab advanced"],</p><p class="text_indent">"Monitoring and metrics systems": ["Grafana basic", "Prometheus basic", "ELK basic", etc.]",</p><p class="text_indent">"Containerization and orchestration systems": ["Docker advanced", "Kubernetes basic"],</p><p class="text_indent">"Systems for deploying and working with software": ["Ansible intermediate"],</p><p class="text_indent">"Access storage systems": ["Hashicorp Vault"],</p><p class="text_indent">"Routing and load balancers": ["Traefik", "Nginx"],</p><p class="text_indent">"Access Control": ["Keycloak", "FreeIPA"],</p><p class="text_indent">"Working with backup": ["Backuppc", "Scripts for working with S3"],</p><p class="text_indent">"Erp and crm systems": ["Odoo"],</p><p class="text_indent">"Operating systems": ["Debian", "Ubuntu", "Centos", "Windows-Server 2019"],</p><p class="text_indent">"Communication and organization of employees work": ["Mattermost", "Nextcloud", "Centos", "Windows-Server 2019"],</p>}', 500, 0.1, btn_step_three);
    // typePype('print(response.json()["devops_experience"])', document.getElementById('step_two_text'), document.getElementById('step_two_restext'), '{<br><p class="text_indent">"DevOps knowledge": ["Git", "Gitlab - CI/CD", "monitoring and metrics systems (Grafana, Prometheus, ELK, etc.)", "Docker advanced", "Kubernetes basic", "Ansible intermediate", "Hashicorp Vault", "Traefik", "Nginx", "etc."],</p><p class="text_indent">"Experience in system administration": ["Odoo", "Mattermost", "Nextcloud", "FreeIPA", "Debian, Ubuntu, Centos, Windows-Server 2019", "Keycloak", etc.],</p>}', 500, 0.1, btn_step_three);
    // typePype('print(response.json()["web_development_experience"])', document.getElementById('step_two_text'), document.getElementById('step_two_restext'), '{<br><p class="text_indent">"backend python frameworks": ["advanced Odoo", "advanced Django", "intermediate Django Rest Framework", "basic Flask"],</p><p class="text_indent">"Go backend": ["pure basic", "gorilla", "chi", "fizz"],</p><p class="text_indent">"frontend frameworks": ["Owl intermediate", "Vue basic"],</p><p class="text_indent">"HTML": ["full advanced"],</p><p class="text_indent">"CSS": ["pure advanced", "SCSS basic", "bootstrap5"],</p><p class="text_indent">"JS": ["pure intermediate"],</p><p class="text_indent">"Php": ["pure basic", "1c-bitrix basic"],</p><p class="text_indent">"Kid`s constructors": ["Tilda", "WordPress(Elementor, etc.)"],</p><p class="text_indent">"Deployment experience": ["Docker advanced", "Kubernetes basic", "etc."],</p>}', 500, 0.1, btn_step_three);
    step_two_text.classList.add('visible');
    step_one_text.classList.add('non-typed');
    btn_step_two.setAttribute('disabled', true);
};

btn_step_three.onclick = function () {
    typePype('print(response.json()["mobile_development_experience"])', document.getElementById('step_three_text'), document.getElementById('step_three_restext'), '{<br><p class="text_indent">"Language": ["Java basic"],</p><p class="text_indent">"Used packages and technologies": ["Picasso/Glide", "RecyclerView", "Retrofit2", "Gson", "DataBinding", "ViewModel", "Room", "Material design + xml layouts", "MVVM", "etc."],</p>}', 500, 0.1, btn_step_four);
    // typePype('print(response.json()["mobile_development_experience"])', document.getElementById('step_three_text'), document.getElementById('step_three_restext'), '{<br><p class="text_indent">"Language": ["Java basic"],</p><p class="text_indent">"Used packages and technologies": ["Picasso/Glide", "RecyclerView", "Retrofit2", "Gson", "DataBinding", "ViewModel", "Room", "Material design + xml layouts", "MVVM", "etc."],</p>}', 500, 0.1, btn_step_four);
    step_three_text.classList.add('visible');
    step_two_text.classList.add('non-typed');
    btn_step_three.setAttribute('disabled', true);
};

btn_step_four.onclick = function () {
    typePype('print(response.json()["other_it_experience"])', document.getElementById('step_four_text'), document.getElementById('step_four_restext'), '{<br><p class="text_indent">"Other works experience": ["Commercial","Management", "Electricity"],</p><p class="text_indent">"interests": ["Family", "Sport(powerlifting, boxing, chess)", "IT sphere", "etc."],</p><p class="text_indent">"hh profile": ["<a href="https://kirov.hh.ru/resume/dfcf8191ff08bd689d0039ed1f4b4e33516430" target="_blank">my resume on hh.ru</a>",],</p><p class="text_indent">"linkedin profile": ["<a href="https://www.linkedin.com/in/alexander-maltz/" target="_blank">my profile on linkedin</a>",],</p>}', 500, 0.1);
    // typePype('print(response.json()["other_it_experience"])', document.getElementById('step_four_text'), document.getElementById('step_four_restext'), '{<br><p class="text_indent">"DevOps knowledge": ["Git", "Gitlab - CI/CD", "Monitoring systems", "Docker advanced", "Kubernetes basic", "Ansible intermediate", "etc."],</p><p class="text_indent">"Operating systems used and administrated": ["Ubuntu", "Centos", "Fedora 32, 33", "Kali linux", "Windows", "etc."],</p><p class="text_indent">"Setting up contextual advertising": ["Yandex.Direct","Google Ads"],</p>}', 500, 0.1, btn_step_five);
    step_four_text.classList.add('visible');
    step_three_text.classList.add('non-typed');
    btn_step_four.setAttribute('disabled', true);
};

// btn_step_five.onclick = function () {
//     typePype('print(response.json()["other_not_it_experience_and_background"])', document.getElementById('step_five_text'), document.getElementById('step_five_restext'), '{<br><p class="text_indent">"Work experience": ["Commercial","Management", "Electricity"],</p><p class="text_indent">"interests": ["Family", "Sport(powerlifting, boxing, chess)", "IT sphere", "etc."],</p><p class="text_indent">"resume": ["<a href="https://kirov.hh.ru/resume/dfcf8191ff08bd689d0039ed1f4b4e33516430" target="_blank">my resume on hh.ru</a>",],</p>}', 500, 0.1);
//     step_five_text.classList.add('visible');
//     step_four_text.classList.add('non-typed');
//     btn_step_five.setAttribute('disabled', true);
// };

// typePype('import requests\n\nAPI_URL = "◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼"\n\nresponse = requests.get(API_URL)\nprint(response.json()["python_knowledge"])', document.getElementById('step_one_text'), document.getElementById('step_one_restext'), '{<br><p class="text_indent">"language": ["advanced",],</p><p class="text_indent">"frameworks": ["advanced Django", "basic Django Rest Framework"],</p><p class="text_indent">"used_packages": ["requests", "pandas", "scapy", "smtplib", "imaplib", "tkinter", "BeautifulSoup4", "celery", "re", "selenium", "socket", "subprocess", "sys", "etc."],</p>}', 300, 0.5, btn_step_two);
//
// btn_step_two.onclick = function () {
//     typePype('print(response.json()["web_development_experience"])', document.getElementById('step_two_text'), document.getElementById('step_two_restext'), '{<br><p class="text_indent">"Constructors": ["Tilda", "WordPress(Elementor, etc.)"],</p><p class="text_indent">"HTML": ["full",],</p><p class="text_indent">"CSS": ["pure", "SCSS", "bootstrap5"],</p><p class="text_indent">"JS": ["pure basic",],</p><p class="text_indent">"Php": ["pure basic", "1c-bitrix basic"],</p><p class="text_indent">"Python": ["advanced Django", "basic Django Rest Framework", "basic Flask"],</p>}', 300, 0.5, btn_step_three);
//     step_two_text.classList.add('visible');
//     step_one_text.classList.add('non-typed');
//     btn_step_two.setAttribute('disabled', true);
// };
//
// btn_step_three.onclick = function () {
//     typePype('print(response.json()["mobile_development_experience"])', document.getElementById('step_three_text'), document.getElementById('step_three_restext'), '{<br><p class="text_indent">"language": ["Java basic",],</p><p class="text_indent">"used_packages_and_technologies": ["Picasso/Glide", "RecyclerView", "Retrofit2", "Gson", "DataBinding", "ViewModel", "Room", "Material design + xml layouts", "MVVM", "etc."],</p>}', 300, 0.5, btn_step_four);
//     step_three_text.classList.add('visible');
//     step_two_text.classList.add('non-typed');
//     btn_step_three.setAttribute('disabled', true);
// };
//
// btn_step_four.onclick = function () {
//     typePype('print(response.json()["other_it_experience"])', document.getElementById('step_four_text'), document.getElementById('step_four_restext'), '{<br><p class="text_indent">"Setting up contextual advertising": ["Yandex.Direct","Google Ads"],</p><p class="text_indent">"operating systems used": ["Windows", "Fedora 32, 33", "Kali linux", "etc."],</p>}', 300, 0.5, btn_step_five);
//     step_four_text.classList.add('visible');
//     step_three_text.classList.add('non-typed');
//     btn_step_four.setAttribute('disabled', true);
// };
//
// btn_step_five.onclick = function () {
//     typePype('print(response.json()["other_not_it_experience_and_background"])', document.getElementById('step_five_text'), document.getElementById('step_five_restext'), '{<br><p class="text_indent">"Work experience": ["Commercial","Management", "Electricity"],</p><p class="text_indent">"interests": ["Family", "Sport(powerlifting + chess)", "IT sphere", "etc."],</p><p class="text_indent">"resume": ["<a href="https://kirov.hh.ru/resume/dfcf8191ff08bd689d0039ed1f4b4e33516430" target="_blank">my resume on hh.ru</a>",],</p>}', 300, 0.5);
//     step_five_text.classList.add('visible');
//     step_four_text.classList.add('non-typed');
//     btn_step_five.setAttribute('disabled', true);
// };