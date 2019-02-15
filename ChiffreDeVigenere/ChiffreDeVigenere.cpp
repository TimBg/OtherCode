#include <iostream>
using namespace std;

int main(){  
    string alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", arrAlph[26], key, longKey = "", word, result = "";
    int t = 0;
    arrAlph[0] = alph;
    cout << "Please, enter the word" << endl;
    cin >> word;
    cout << "Please, enter the key" << endl;
    cin >> key;

    for(int i = 1; i < 26; ++i){
        string str = arrAlph[i - 1];
        str += str[0];
        str.erase(0, 1);
        arrAlph[i] = str;
    }

    for(int i = 0; i < word.length(); ++i){
        longKey += key[t];
        ++t;
        t = t == key.length() ? 0 : t;
    }

    for(int i = 0; i < word.length(); ++i){
        result += arrAlph[alph.find(longKey[i])][alph.find(word[i])];
    }

    cout << result;
    return 0;
}    