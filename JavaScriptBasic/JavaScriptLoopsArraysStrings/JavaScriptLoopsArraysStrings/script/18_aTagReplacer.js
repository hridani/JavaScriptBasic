function replaceATag(string) {
    var rex = /<a([^>]+)>([^<]+)<\/a>/gi;
    return string.replace(rex, '[URL$1]$2[/URL]');
}
console.log(replaceATag('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li></ul>'));