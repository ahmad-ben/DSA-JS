// Recursive but not O(1) Space

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true

  if(str2.length === 0) return false

  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
