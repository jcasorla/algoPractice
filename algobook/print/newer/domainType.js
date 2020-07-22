

function domainType(websites){
    let domains =[];

    websites.forEach(element => {
        let web = element.split('.');
        if(web[web.length-1] ==='org'){
            domains.push('organization');
        }else if(web[web.length-1] ==='com'){
            domains.push('commercial');
        }else if(web[web.length-1] ==='net'){
            domains.push('network');
        }else if(web[web.length-1] ==='info'){
            domains.push('information');
        }
    });

    return domains;
}

console.log(domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info']));