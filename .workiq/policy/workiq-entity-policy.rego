package workiq.entity

# Default deny — explicit allowlisting required
default allow := false

# ───────────────────────────────────────────
# Path validation
# ───────────────────────────────────────────

# Allow if the path matches any allowed glob pattern
path_allowed if {
    pattern := data.path_allow[_]
    glob.match(pattern, ["/"], input.path)
}

# Block if the path contains any denied segment
path_blocked if {
    segment := data.path_deny_segments[_]
    contains(input.path, segment)
}

# Block path traversal
path_blocked if {
    contains(input.path, "..")
}

# ───────────────────────────────────────────
# Read access
# ───────────────────────────────────────────

allow if {
    input.method == "GET"
    path_allowed
    not path_blocked
}

# ───────────────────────────────────────────
# Mutation access
# ───────────────────────────────────────────

allow if {
    data.mutations.allowed == true
    allowed_method(input.method)
    path_allowed
    not path_blocked
}

allowed_method(m) if {
    data.mutations.allowed_methods[_] = m
}

# ───────────────────────────────────────────
# Query parameter blocking
# ───────────────────────────────────────────

# Use a set of deny reasons (partial rules) to avoid conflicts
deny_reasons[msg] if {
    param := data.query_deny[_]
    contains(input.query, param)
    msg := concat("", ["Query parameter ", param, " is not permitted. Use $filter instead."])
}

# ───────────────────────────────────────────
# Body rules (e.g., block external email)
# ───────────────────────────────────────────

deny_reasons[rule.message] if {
    rule := data.body_rules[_]
    rule.enabled == true
    input.method == rule.match.method
    input.path == rule.match.path
    check_body_rule(rule.deny_if)
}

# Evaluate "not_endswith" body rule: deny if any item does NOT end with the suffix
check_body_rule(rule_def) if {
    rule_def.operator == "not_endswith"
    values := object.get(input, rule_def.field_path, [])
    val := values[_]
    not endswith(val, rule_def.value)
}

# Evaluate "not_startswith" body rule
check_body_rule(rule_def) if {
    rule_def.operator == "not_startswith"
    values := object.get(input, rule_def.field_path, [])
    val := values[_]
    not startswith(val, rule_def.value)
}

# Evaluate "contains_string" body rule
check_body_rule(rule_def) if {
    rule_def.operator == "contains_string"
    values := object.get(input, rule_def.field_path, [])
    val := values[_]
    contains(val, rule_def.value)
}
