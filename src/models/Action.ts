enum Action {
    PICK = 'PICK',
    EXCLUSIVE_PICK = 'EXCLUSIVE_PICK',
    GLOBAL_PICK = 'GLOBAL_PICK',
    HIDDEN_PICK = 'HIDDEN_PICK',
    HIDDEN_EXCLUSIVE_PICK = 'HIDDEN_EXCLUSIVE_PICK',
    BAN = 'BAN',
    EXCLUSIVE_BAN = 'EXCLUSIVE_BAN',
    GLOBAL_BAN = 'GLOBAL_BAN',
    HIDDEN_BAN = 'HIDDEN_BAN',
    HIDDEN_EXCLUSIVE_BAN = 'HIDDEN_EXCLUSIVE_BAN',
    HIDDEN_GLOBAL_BAN = 'HIDDEN_GLOBAL_BAN',
    SNIPE = 'SNIPE',
    HIDDEN_SNIPE = 'HIDDEN_SNIPE',
    
    REVEAL_PICKS = 'REVEAL_PICKS',
    REVEAL_BANS = 'REVEAL_BANS',
    REVEAL_SNIPES = 'REVEAL_SNIPES',
    REVEAL_ALL = 'REVEAL_ALL'
}

export default Action;