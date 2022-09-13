select id as identifier, nome,email from funcionarios
where nome not like "%r%"and email like "%u%";