#! /bin/sh
# find . \
# 	-name ".git*" -prune \
# 	\( \
# 	-name "*.aux" -or \
# 	-name "*.fdb_latexmk" -or \
# 	-name "*.glo" -or \
# 	-name "*.gls" -or \
# 	-name "*.ilg" -or \
# 	-name "*.ind" -or \
# 	-name "*.idx" -or \
# 	-name "*.log" -or \
# 	-name "*.out" -or \
# 	-name "*.synctex" -or \
# 	-name "*.synctex.gz" -or \
# 	-name "_minted-*" -or \
# 	-name "*.toc" \
# 	\) \
# 	-exec rm -rf {} \;


find . \
  \( \
	-name "*.aux" -or \
	-name "*.fdb_latexmk" -or \
	-name "*.glo" -or \
	-name "*.gls" -or \
	-name "*.ilg" -or \
	-name "*.ind" -or \
	-name "*.log" -or \
	-name "*.out" -or \
	-name "*.synctex" -or \
	-name "*.synctex.gz" -or \
	-name "_minted-*" -or \
	-name "*.toc" \
  \) \
	-exec rm -rf {} \;


#find . -name "*.synctex.gz" -or -name "_minted-*" -exec rm -rf {} \;
