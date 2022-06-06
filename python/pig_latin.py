def translate(word_or_phrase):
  vowels=("a","e","i","o","u")
  word_list=[]
  answer=[]

  if " " in word_or_phrase:           #puts word/phrase into list
    word_list=word_or_phrase.split()
  else:
    word_list.append(word_or_phrase)

  print(word_list)
  for word in word_list:
    if word.startswith(vowels):
      answer.append(f"{word[0:]}ay")
    else:   #starts with consonant
      if word.startswith("qu"):
        answer.append(f"{word[2:]}quay")
      elif word[1] in vowels: #2nd letter is vowel
        answer.append(f"{word[1:]}{word[0]}ay")
      elif word[0] not in vowels and word[1] not in vowels:
        if word[1]=="q" and word[2]=="u":
          answer.append(f"{word[3:]}{word[0:3]}ay")
        elif word[2] in vowels: #3rd letter is vowel
          answer.append(f"{word[2:]}{word[0:2]}ay")
        else: #3rd is a consonant
          answer.append(f"{word[3:]}{word[0:3]}ay")
    
  return " ".join(answer)

# print(translate('apple'))
# print(translate('eat pie'))
print(translate("square"))