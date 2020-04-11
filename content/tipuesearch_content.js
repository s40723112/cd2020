var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'week 2', 'text': '將python 3.7.3更新至3.8.2 \n 1.進入 https://www.python.org/downloads/release/python-382/ \xa0 \n 2.往下滑到最底，下載 Windows x86-64 executable installer \n 3.下載完成後開啟，選擇Customize installation選項 \n \n (請不要在意版本號) \n 4.不要勾選pip選項，接著按下next \n 5.選擇路徑將python安裝至可攜式系統中的Y槽下 \n 6.接著開啟start_mdecourse.bat批次檔 \n 7.將 start_mdecourse.bat批次檔中的py373改為安裝python 3.8.2版本的資料夾 \n (我的資料夾名字是py382) \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\nExit \n 8.執行stop.bat批次檔後重新啟動start_mdecourse(為了讓檔案重新讀取) \n 9.輸入get-pip.py，開始安裝pip工具 \n 10.安裝完成後，使用 pip install  XXX ( packages名字 )，安裝以下 packages: \n 1. Flask 2. Markdown 3. lxml 4. bs4 5. flask_cors 6. pelican 7. leo \n EX.:要安裝Flask就輸入  pip install Flask  ，以此類推', 'tags': '', 'url': 'week 2.html'}, {'title': 'week 4', 'text': '無法執行launchleo.py \n 當更新python為3.8.2版本並且要執行launchleo.py發現無法像之前一樣順利開啟。 \n 解決方法: \n 1.開啟start.bat \n 2.進入SciTE程式編輯器，點選options \n 3.點選open python properties \n \n 4.使用Ctrl+F\xa0 尋找  py373\xa0 \n 5.將py373更改為可攜裝置中的python3.8.2的資料夾名稱 \n 範例: \n 我的python3.8.2資料夾名稱為py382 \n # Define SciTE settings for Python files.\n\nfile.patterns.py=*.py;*.pyw;*.pyx;*.pxd;*.pxi\nfile.patterns.scons=SConstruct;SConscript\n\n*source.patterns.python=$(file.patterns.py);\n\nshbang.python=py\n\nfilter.python=Python (py pyw)|$(file.patterns.py)|\n\n*filter.python=$(filter.python)\n\nlexer.$(file.patterns.py)=python\nlexer.$(file.patterns.scons)=python\n\n*language.python=Pytho&n|py||\n\nkeywordclass.python2=and as assert break class continue def del elif \\\nelse except exec finally for from global if import in is lambda not \\\nor pass print raise return try while with yield\n\nkeywordclass.python3=False None True and as assert break class continue \\\ndef del elif else except finally for from global if import in is lambda \\\nnonlocal not or pass raise return try while with yield\n\nkeywordclass.python=$(keywordclass.python2)\n\n# Extra keywords for cython\nkeywordclass.cython=cdef cimport cpdef\n\nkeywords.$(file.patterns.py)=$(keywordclass.python) $(keywordclass.cython)\nkeywords.$(file.patterns.scons)=$(keywordclass.python)\n\n# If you uncomment the 3 lines below,\n# and put some words after "keywordclass2.python=",\n# those words will be styled by style.python.14\n\n#keywordclass2.python=\n#keywords2.$(file.patterns.py)=$(keywordclass2.python)\n#keywords2.$(file.patterns.scons)=$(keywordclass2.python)\n\n# Use 2 sets of substyles to highlight standard library modules and\n# imports from the future.\n# Additional identifier sets can be added by incrementing the  next\n# line\'s value and adding extra definitions similar to below.\nsubstyles.python.11=2\n\nsubstylewords.11.1.$(file.patterns.py)=\\\n__main__ _dummy_thread _thread abc aifc argparse \\\narray ast asynchat asyncio asyncore atexit audioop \\\nbase64 bdb binascii binhex bisect builtins bz2 \\\ncalendar cgi cgitb chunk cmath cmd code codecs \\\ncodeop collections colorsys compileall concurrent \\\nconfigparser contextlib copy copyreg crypt csv \\\nctypes curses datetime dbm decimal difflib dis \\\ndistutils dummy_threading email ensurepip enum \\\nerrno faulthandler fcntl filecmp fileinput fnmatch \\\nformatter fpectl fractions ftplib functools gc getopt \\\ngetpass gettext glob grp gzip hashlib heapq hmac \\\nhtml http http imaplib imghdr importlib inspect io \\\nipaddress itertools json keyword linecache locale \\\nlogging lzma macpath mailbox mailcap marshal math \\\nmimetypes mmap modulefinder msilib msvcrt \\\nmultiprocessing netrc nis nntplib numbers operator \\\nos os ossaudiodev parser pathlib pdb pickle \\\npickletools pipes pkgutil platform plistlib poplib posix \\\npprint pty pwd py_compile pyclbr queue quopri \\\nrandom re readline reprlib resource rlcompleter runpy \\\nsched select selectors shelve shlex shutil signal site \\\nsmtpd smtplib sndhdr socket socketserver spwd \\\nsqlite3 ssl stat statistics string stringprep struct \\\nsubprocess sunau symbol symtable sys sysconfig \\\nsyslog tabnanny tarfile telnetlib tempfile termios \\\ntextwrap threading time timeit tkinter token \\\ntokenize trace traceback tracemalloc tty turtle \\\ntypes unicodedata unittest urllib uu uuid venv warnings \\\nwave weakref webbrowser winreg winsound wsgiref \\\nxdrlib xml xmlrpc zipfile zipimport zlib\nstyle.python.11.1=fore:#DD9900\n\nsubstylewords.11.2.$(file.patterns.py)=__future__ \\\nwith_statement unicode_literals print_function\nstyle.python.11.2=fore:#EE00AA,italics\n\n#~ statement.indent.$(file.patterns.py)=10 :\nstatement.indent.$(file.patterns.py)=5 class def elif else except finally \\\nfor if try while with\n\nstatement.lookback.$(file.patterns.py)=0\nblock.start.$(file.patterns.py)=\nblock.end.$(file.patterns.py)=\n\nview.indentation.examine.*.py=2\n\ntab.timmy.whinge.level=1\n\n#fold.quotes.python=1\n\ncomment.block.python=#~\n\nindent.python.colon=1\n\n# Python styles\n# White space\nstyle.python.0=fore:#808080\n# Comment\nstyle.python.1=fore:#007F00,$(font.comment)\n# Number\nstyle.python.2=fore:#007F7F\n# String\nstyle.python.3=fore:#7F007F,$(font.monospace)\n# Single quoted string\nstyle.python.4=fore:#7F007F,$(font.monospace)\n# Keyword\nstyle.python.5=fore:#00007F,bold\n# Triple quotes\nstyle.python.6=fore:#7F0000\n# Triple double quotes\nstyle.python.7=fore:#7F0000\n# Class name definition\nstyle.python.8=fore:#0000FF,bold\n# Function or method name definition\nstyle.python.9=fore:#007F7F,bold\n# Operators\nstyle.python.10=bold\n# Identifiers\nstyle.python.11=\n# Comment-blocks\nstyle.python.12=fore:#7F7F7F\n# End of line where string is not closed\nstyle.python.13=fore:#000000,$(font.monospace),back:#E0C0E0,eolfilled\n# Highlighted identifiers\nstyle.python.14=fore:#407090\n# Decorators\nstyle.python.15=fore:#805000\n# F-String\nstyle.python.16=fore:#7F007F,$(font.monospace)\n# Single quoted f-string\nstyle.python.17=fore:#7F007F,$(font.monospace)\n# Triple quoted f-string\nstyle.python.18=fore:#7F0000\n# Triple double quoted f-string\nstyle.python.19=fore:#7F0000\n# Matched Operators\nstyle.python.34=fore:#0000FF,bold\nstyle.python.35=fore:#FF0000,bold\n# Braces are only matched in operator style\nbraces.python.style=10\n\nif PLAT_WIN\n\tcommand.go.*.py=y:\\py382\\pythonw -u "$(FileNameExt)"\n\tcommand.go.subsystem.*.py=1\n\tcommand.go.*.pyw=pythonw -u "$(FileNameExt)"\n\tcommand.go.subsystem.*.pyw=1\n\tcommand.build.SConscript=scons.bat --up .\n\tcommand.build.SConstruct=scons.bat .\n\nif PLAT_GTK\n\tcommand.go.*.py=y:\\py382\\python -u "$(FileNameExt)"\n\tcommand.build.SConscript=scons --up .\n\tcommand.build.SConstruct=scons .\n\nif PLAT_MAC\n\tcommand.go.*.py=python -u "$(FileNameExt)"\n\tcommand.build.SConscript=scons --up .\n\tcommand.build.SConstruct=scons .\n\ncommand.name.1.$(file.patterns.py)=Syntax Check\ncommand.1.$(file.patterns.py)=python -c "import py_compile; py_compile.compile(r\'$(FilePath)\')"\n \n \n 將launchleo.py檔案放入SciTE編輯器就能夠順利開啟leo Editor', 'tags': '', 'url': 'week 4.html'}, {'title': 'Week 6', 'text': "翻譯 MechanicalDesignProcess.pdf \xa0第二章節\xa0Building the\xa0Design後半部(P27~P33) \n Footnote: (Statistical note) Some designers would make a case for some statistical probability, less than 100%, that all (4) tolerances would go in one direction, and we would not (likely) have a total of 0.025 inch. Some conservative designers would assume that all tolerance will go in the “wrong” direction, and thus，design is a “worst case.” I’ll generally disregard the “statistical” approach to\xa0tolerances for now, but it could be valuable in design situations where space is extremely constrained. See Sect. 4.8 for a discussion of: \n \n  Tolerancing using sum of squares \n  Tolerancing using Monte Carlo simulation \n \n \xa0 \n 註記 :( 統計說明 ) 某些設計師會提出一些統計概率，小於 100 ％，則所有（ 4 ）公差將沿一個方向，而且我們 ( 可能 ) 不會總計有 0.025 英寸。 一些保守的設計師會假設所有公差都將朝“錯誤”的方向發展，因此，設計是“最壞的情況”。 我現在通常不會理會公差的“統計”方法，但在空間非常受限的設計情況下，這可能會很有價值。 參見章節。  4.8 討論： \n \n 使用平方和進行公差 \n 使用蒙特卡洛模擬進行公差 \n \n \n Movement of the Object relative to the Wall (during product operation): This is also known as “sway” clearance, that is, the object may vibrate in operation while the wall could be steadfast \n \n 2. 物體相對於牆壁的運動（在產品運行過程中）：這也稱為“搖擺”間隙，也就是說，物體可能在運作時振動，而牆壁可能會保持堅固。 \n \n  Growth of the Objects (during operation): This could be the result of thermal expansion. \n \n 3.物體的膨脹（在操作過程中）：這可能是熱膨脹的結果。 \n 4 .Overall (outside) size constraints: Internal clearance distance will be affected by the overall size. That is, with a given overall size, the distance between objects will have some particular limit. The distance between objects will be a function on the size\xa0\xa0 tolerances of the objects and the tolerances on the Object locations. If the overall size is not constrained (rare instance), Object size and clearances between Objects will determine the overall size. \n 4 .整體（外部）尺寸限制：內部間隙距離將受到整體尺寸的影響。也就是說，對於給定的整體大小，物體之間的距離將有一些特定的限制。物體之間的距離將取決於物體的尺寸公差和物體位置的公差。如果總體尺寸不受限制（稀少例子），則物體尺寸和物體間隙之間的大小將決定整體大小。 \n 2.4.2 Object Arrangement \n 2.4.2物體排列 \n The designer usually works to minimize the overall dimensions of the enclosure by a “productive” arrangement of all of the Objects needed to fit within the enclosure.\xa0 \n 設計師通常會通過“生產”排列所有適合安裝在外殼中的物體的方式來最大程度地減小外殼的整體尺寸。 \n This can be done in two dimensions (X and Y) and the 3rd dimension, Z. Other arrangements of Objects look to fulfill assembly, servicing, aesthetic, or user interface needs. \n 這可以在兩個維度（ X 和 Y ）以及第三個維度 Z 中進行。物體的其他排列旨在滿足組裝，維修，美觀或用戶界面的需求。 \n In order to minimize the overall dimensions, some distance between Objects is chosen. This distance can be first thought of as a nominal distance.This nominal distance can then be adjusted to suit the design. For example, one could assume a nominal distance between objects of 0.100 inch (in all directions). \n 為了最小化整體尺寸，決定了物體之間的一定距離。 該距離可以首先被認為是公稱距離。 然後可以調整該公稱距離以適合設計。 例如，可以假設物體之間的標稱距離為 0.100 英寸（在所有方向上）。 \n Of course, the gap size would not have to be the same between all objects. Perhaps the 0.100 “gap” between objects produces an overall dimension that exceeds the expectations of the product (exceeds the product specification).  \n 當然，所有物體之間的間隙大小不必相同。 物體之間的 0.100 “間隙”可能會產生超出產品期望值的總體尺寸（超出產品規格）。 \n Then, the designer would look to reduce the 0.100 inch gap – but, the gap cannot be less than zero, and it cannot be less thanany “worst-case” problem such as an Object being supplied at the upper end of its size tolerance or other factors explored below. \n \xa0然後，設計人員將尋求減少0.100英寸的間隙-但是，間隙不能小於零，也不能小於任何“最壞情況”的問題，像是在其尺寸公差的上限提供了一個物體，或者探討下面其他因素。 \n Then, the designer checks to see that all of the Objects in the enclosure have been placed and that the gaps between Objects are such that all interference between Objects is avoided under all environments and user experiences that the design will exist in.  \n 然後，設計人員檢查是否已放置了外殼中的所有物體，並且物體之間的間隙是否能夠避免在此設計上的所有環境和用戶使用上的所有干擾。 \n The designer will also check to see that the Objects can be assembled into the enclosure in a “forthright” manner and that the service objectives of the product are upheld. \n 設計人員還將檢查是否有以“直覺”的方式將物體組裝到外殼中，以及確保產品的售後服務與維護。 \n The design is ready for the Design Review Process. \n 該設計已準備可以進行審核過程。 \n Reviewing, gaps between volumes (or objects) are a function of: \n 以下功能是查看，體積（或物體 ) 之間的間隙 : \n \n  Fabrication tolerances: A given “box” may be specified as a nominal dimension. \n \n However, a slightly larger (or smaller) box results when the supplier fabricates the box to the allowable outer limits of the nominal dimension. \n \n 加工公差：給定的“盒子”可以指定為公稱尺寸。 \n \n 但是，當供應商按照標準尺寸允許的外部極限來製造盒子時，會導致盒子略大（或更小）。 \n \n  Cooling requirements: A certain component may have to be spaced a minimum \n \n distance from another component so that this component is not thermally affected \n to an intolerable extent. In some heat-dissipative situations, components must be \n placed as close as possible (attached to each other). \n \n 冷卻要求：某些組件可能必須與另一個組件的距離是最小間隔，以便該組件不受熱影響，在某些散熱情況下，組件必須盡可能靠近放置（彼此連接）。 \n \n \n  Assembly and serviceability requirements: Components may need certain spaces between them due to clearance required to either assemble or disassemble the components. \n \n \n 組裝和維修要求：由於組裝或拆卸組件需要一定間隙，組件之間可能需要保持一定的空間。 \n \n \n  Future additions to product (options): Volume may be required for planned additions or product options. \n \n \xa0 •產品（選件)未來的增加：計劃添加或產品選件可能需要數量。 \n Looking back at our original intention, to locate an object, 0.100 inch from a wall, we can see that, when we get into the detailed design, we will have to be careful with this 0.100 inch nominal clearance, (shown by the above discussion on tolerances) as this distance can easily “shrink” (in its worst case) from 0.100 inch to 0.100 minus 0.025 (=0.075 inch). Of course, it could be increasing to 0.100 plus 0.025 (=0.125 inch), also. In the “sketch” design phase, we wouldn’t be that concerned with this dimension; again, it would become more important as the design moves to the prototyping phase . \n 回顧我們最初的意圖，即找到距牆壁 0.100 英寸的物體，當我們進入詳細設計時，我們將必須謹慎對待此 0.100 英寸的標稱間隙（如以上討論所示） 公差），因為該距離很容易從 0.100 英寸縮小到 0.100-0.025 （ = 0.075 英寸）（在最壞的情況下）。 當然，也可以增加到 0.100+0.025 （ = 0.125 英寸）。 在“草圖”設計階段，我們不必擔心這個尺寸； 同樣的，隨著設計進入原型開發階段，這將變得更加重要。 \n All of the above concentration on this 0.100 inch dimension is meant to illustratethat “some distance” is designed between objects (in this case, an object and a wall). \n In most designs, the overall size of the object must be minimized. This leads most designs to have the least possible distance between objects as possible. Examples of designs where overall size (and resulting weight) are minimized would be computer housing, coffee maker, or other household appliance. We live in a world where \n smaller size (usually) equates to: \n \xa0 \n \n  Smaller weight (better fuel savings or ease of use) \n  Smaller ecological footprint (savings on materials) \n  Saving of space in space-limited situations \n  Lower costs (for consumer or producer) \n \n \xa0 \n 在 0.100 英寸尺寸上的所有上述集中旨在說明在物體（在這種情況下，是物體和牆壁）之間設計了“一定距離”。 \n 在大多數設計中，必須使物體的整體尺寸最小。 這導致大多數設計在物體之間的距離盡可能小。 使總體尺寸（和所產生的重量）最小化的設計示例包括計算機外殼，咖啡機或其他家用電器。我們生活在一個較小的世界中（通常）是 : \n \xa0 \n \n 重量更輕（更好地節省燃料或易於使用） \n 較小的生態足跡（節省材料） \n 在空間有限的情況下節省空間 \n 降低成本（對於消費者或生產者）\xa0 \n \n In some cases, it will not be the least possible distance that is desired. Complications such as heat dissipation, or mechanical coupling (say, in a gear drive), certainly affect the distance between objects. We have been “simplifying” the design process in our examples\xa0 \n 在某些情況下，它不是所需的最小距離。 \n 諸如散熱或機械耦合（例如齒輪傳動）之類的並發症 \n 驅動器），當然會影響物體之間的距離。 我們一直在“簡化” \n 我們的示例中的設計過程 \n So, for our example of the 0.100 inch distance between the object and the wall, the designer would actually be challenged to determine what minimal distance this could be (e.g., if this distance was 0.050 inch, our overall product could be smaller). \n 因此，對於我們的物體與牆壁之間 0.100 英寸距離的示例，設計人員實際上將面臨挑戰，以確定這可能是最小的距離（例如，如果該距離為 0.050 英寸，則我們的整體產品可能會更小）。 \xa0 \n Could this distance shrink even further? (Keep in mind that we came up with an “uncertainty” in this distance in the amount of 0.025 inch.) \n 這個距離會進一步縮小嗎？ （請記住，我們在此距離上產生了 0.025 英寸的“不確定性”。） \n In the “sketch phase” of the design, it may not be important to determine this distance exactly. In the interests of proving the overall design in a very quick manner, the designer may make this distance 0.125 inch and get into the details of reducing this distance as the design proves some success.\xa0 \n 在設計的“草圖階段”，準確確定該距離可能並不重要。 為了以非常快速的方式證明整體設計的利益，設計人員可以使此距離為 0.125 英寸，並在減小設計距離的細節上獲得成功，因為設計證明是成功的。 \xa0 \n The wall thickness is usually a function of: \n \n  Strength required for product operation \n  Weight constraints for product \n  Fabrication technique \n \n 壁厚通常擁有以下功能的函數： \n \n 產品操作所需的強度 \n 產品的重量限制 \n 製作工藝 \n \n Wall thickness doesn’t have to be “constant,” that is, it can vary either by the addition of ribs or gussets or the fabrication method that may allow local variation in thickness.\xa0 \n 壁厚不必“不變”，即可以通過添加肋骨或角撐板或可以允許局部變化的製造方法來變化厚度。 \xa0 \n \n 2.4.3 Object Arrangement Example (Fig. 2.3)\xa0 \n 2.4.3對象排列示例（圖2.3） \n So far, in our discussion of locating two Objects (a wall and an object), we have been simplifying the discussion with just two dimensions. We will expand into three dimensions in this section. Let’s take our example of Object arrangement a step further. Let’s take a look at several ways to locate two objects inside of an enclosure and see what options we have. \xa0 \n 到目前為止，在我們關於定位兩個物體（一堵牆和一個物體）的討論中，我們僅用二維簡化了討論。 在本節中，我們將擴展為三個維度。 讓我們以“物體排列”為例。 讓我們看一下在機櫃中定位兩個對象的幾種方法，看看我們有哪些選項。 \xa0 \n For the purposes of this example, let’s say that the two Objects are both “bricks” (literally a brick), with the approximate dimensions of: \n \n  2.5\xa0inches thick \n  3.5\xa0inches wide \n  8.0\xa0inches long\xa0 \n \n 就本示例而言，假設兩個對像都是“磚”（字面上是磚），其近似尺寸為： \n \n 2.5 英寸厚 \n 3.5 英寸寬 \n 8.0 英寸長\xa0 \n \n In our 2D example, we will forget about the “thickness” and just use the 3.5\xa0×\xa08.0 width and length dimensions. So, we basically have a rectangle that is 3.5\xa0×\xa08.0. (We will come back to the 3D example, further on, as this adds more choices for us.) See Fig.\xa02.3.\xa0 \n 在我們的 2D 示例中，我們將忽略“厚度”，而僅使用 3.5 × 8.0 的寬度和長度尺寸。 因此，我們基本上有一個 3.5 × 8.0 的矩形。 （我們將進一步回到 3D 示例，因為這為我們添加了更多選擇。）請參見圖 2.3 。 \n Now, let’s say that our basic starting point in the design is to house two bricks, Brick A and Brick B (both with the same dimensions), in an enclosure. At this initial point, we have no constraints of: \n \n  Overall size or shape of enclosure  \n  Cost of enclosure material \n \n 現在，假設我們設計的基本出發點是將兩個磚塊，磚塊 A 和磚塊 B （尺寸相同）容納在一個封閉空間中。在開始時，我們沒有以下限制： \n \n 外殼的整體尺寸或形狀 \n 外殼材料成本 \n \n \n We can easily envision (at least) five different ways to locate Brick A and Brick B relative to each other, producing very different enclosures. Of course, there are more than five different ways, but I’ve chosen the standard “Cartesian” arrangement of bricks in which they are parallel or aligned to each other. Let’s look at these five different layouts and comment a bit about why one might have some advantages (over the other layouts). A constant one inch is assumed between Brick A and Brick B, and that same one inch clearance is assumed between a brick and a wall (side, top, or bottom).\xa0 \n 我們可以輕鬆地設想（至少）五種不同的方式來相對於磚塊 A 和磚塊 B 定位，從而產生截然不同的外殼。 當然，有超過五種不同的方式，但是我選擇了標準的“笛卡爾”磚排列，其中磚彼此平行或對齊。 讓我們看一下這五個不同的佈局，並評論一下為什麼一個佈局可能比其他佈局更具優勢。 磚塊 A 和磚塊 B 之間假定一個恆定的 1 英寸，磚塊和牆壁（側面，頂部或底部）之間假定一個相同的 1 英寸間隙。 \n \n  Layout 1: Brick A and Brick B side by side along width \n  Layout 2: Brick A and Brick B aligned along length \n  Layout 3: Brick A and Brick B in “L shape” \n  Layout 4: Brick A and Brick B in “T shape” \n  Layout 5: Brick A and Brick B “stacked” (a 3D version – this is the only layout that has used the “3rd Dimension”) \n \n \xa0 \n \n 版式 1 ：沿著寬度並排放置磚塊 A 和磚塊 B \n 佈局 2 ：磚塊 A 和磚塊 B 沿長度對齊 \n 佈局 3 ：“  L 形”的磚塊 A 和磚塊 B \n 版式 4 ：“  T 形”的磚塊 A 和磚塊 B \n 版式 5 ：“堆疊”磚塊 A 和磚塊 B （ 3D 版本 - 這是唯一使用“三維”的版式）\xa0 \n \n \n Now, let’s analyze the five layouts.\xa0(For all of the layouts, let's assume a very thin-skin for the enclosure that adds essentially zero to the enclosure width, length, and height.\xa0Also, we'll neglect the rounded corners that an enclosure might have, and just assume square corners). \n 現在，讓我們分析五種佈局。（對於所有佈局，我們假設外殼的外觀非常薄，實際上使外殼的寬度，長度和高度增加了零。此外，我們將忽略外殼可能具有的圓角，而僅假設方正角落）。 \n \n  Layout 1 is seemingly the simplest layout, ending with a relatively square shape \n \n for an enclosure. Resulting enclosure is 10 × 10 × 4.5 high. The six sides (areas) are 2 × (10 × 10) + 4 × (10 × 3.5). \n \n  Layout 2 is “long,” rather than “square.” This type of enclosure may have unique applications, such as for better utilization of desk space. Resulting enclosure is 19 × 5.5 × 4.5 high. The six sides (areas) are 2 × (19 × 5.5) + 2 × (19 × 3.5) + 2 × (5.5 × 3.5). \n  Layout 3 may be better suited for “corner” applications. Resulting enclosure is (5.5 × 10 × 4.5) + (5.5 × 9 × 4.5). The eight sides (areas) are 3.5 × (4.5 + 9 + 10 + 4.5 + 5.5 + 14.5) + (9 × 5.5 × 2) + (10 × 5.5 × 2). \n  Layout 4 is similar to Layout 3 but with a more symmetrical look (same Volume and same perimeter as Layout 3). \n  Layout 5 offers minimal “floor plan” but results in the tallest of the layouts. Resulting enclosure is 10 × 5.5 × 8 high. The six sides (areas) are 2 × (10 × 5.5) + 2 × (10 × 8) + 2 × (5.5 × 8). \n \n \n 版式 1 似乎是最簡單的版式，以相對方形結束 \n \n 用於外殼。所得的機箱高度為 10 × 10 × 4.5 。六個邊（面積）為 2 ×（ 10 × 10 ） + 4 ×（ 10 × 3.5 ）。 \n \n 佈局 2 是“長”，而不是“正方形”。這種類型的外殼可能具有獨特的應用，例如更好地利用辦公桌空間。最終的外殼高度為 19 × 5.5 × 4.5 。六個邊（面積）為 2 ×（ 19 × 5.5 ） + 2 ×（ 19 × 3.5 ） + 2 ×（ 5.5 × 3.5 ）。 \n 佈局 3 可能更適合“轉角”應用程序。結果是（ 5.5 × 10 × 4.5 ） + （ 5.5 × 9 × 4.5 ）。八個邊（面積）為 3.5 ×（ 4.5 + 9 + 10 + 4.5 + 5.5 + 14.5 ） + （ 9 × 5.5 × 2 ） + （ 10 × 5.5 × 2 ）。 \n 版面 4 與版面 3 相似，但外觀更為對稱（與版面 3 相同的體積和相同的周長）。 \n 佈局 5 提供最小的“平面圖”，但導致最高的佈局。最終的外殼高 10 × 5.5 × 8 。六個邊（面積）為 2 ×（ 10 × 5.5 ） + 2 ×（ 10 × 8 ） + 2 ×（ 5.5 × 8 ）。 \n \n These simple layouts illustrate that even the placement of two Objects, in this case, two bricks, represents quite a few possibilities. If one would add a 3rd Object or Objects of different sizes, one can see that this gets quite complicated. Sometimes, there is a fundamental reason for the placement of one object relative to another, as one object’s “in” should be close to the other object’s “out” (nesting of objects). In any case, let’s continue to discuss some relative merits of the five layouts, above . \n \xa0 這些簡單的佈局說明即使放置兩個物體（在這種情況下為兩個磚塊）也代表了很多可能性。如果添加第三個對像或不同大小的對象，您會發現這變得相當複雜。 有時候，一個物體相對於另一個物體的放置是有根本原因的，因為一個物體的“入”應該靠近另一個物體的“出”（嵌套對象）。 無論如何，讓我們繼續討論上面五個佈局的一些相對優點。 \n \xa0 There may be a fundamental aesthetic rationale for a choice between the layouts. That is, Layout 1 could be chosen because it is deemed “more direct” (more “honest”), and it is possible that Layout 3 is deemed more “interesting.” So, the choice of layout could come down to a marketing decision that the customer will find a 2.4 Optimal Object Placement particular enclosure shape to be more pleasing (and, thus, results in higher sales of the product). \n \xa0 在佈局之間進行選擇可能會有基本的美學原理。  也就是說，可以選擇佈局 1 ，因為它被認為“更直接”（更“直覺”），並且有可能佈局 3 被認為更“有趣”。  因此，佈局的選擇可能取決於市場決定，即客戶會發現 2.4 最佳對象放置特定的外殼形狀更令人愉悅（並因此提高了產品銷量）。 \n \xa0 How about optimization (minimization) of the surface area of the enclosure – which layouts results in the minimum surface area? Again, the enclosure surrounds both bricks on their sides, top, and bottom. \n \xa0 如何優化（最小化）外殼的表面積 - 哪種佈局導致最小的表面積？ 同樣，外殼在其側面，頂部和底部都圍繞著這兩個磚塊。 \n \n \n Some Conclusions to Object Arrangemen t \n 關於物體排列的一些結論 \n \xa0 If weight is to be minimized, Layout 1 is best as the weight is primarily due to enclosure perimeter area. (Bricks have the same weight in all layouts, and the air is negligible.) \n \xa0 如果要使重量最小，則佈局 1 最好，因為重量主要是由於機櫃的外圍區域。 （磚塊在所有佈局中的重量都相同，空氣可以忽略不計。） \n \xa0If volume is to be minimized, Layout 5 is best. This may be advantageous for some designs where size is restricted. \n \xa0 如果要最小化體積，則佈局 5 是最好的。 這對於尺寸受到限制的某些設計可能是有利的。 \n \xa0Volume is the same for Layouts 2, 3, and 4 \n 佈局 2 、 3 和 4 的體積相同 \n \xa0Largest perimeter area is Layout 2. An interesting “Layout 6” (not shown) would be a enclosure that would be a sphere. A 6 inch radius sphere could house Layout 5 with the resulting volume of about 900 cubic inches while only having a perimeter area of about 450 square inches - perhaps a “creative” solution?\xa0 \n 最大的外圍區域是佈局 2 。有趣的“佈局 6 ”（未顯示）將是一個球形的外殼。 半徑為 6 英寸的球體可以容納 佈局 5 的排列，從而得到大約 900 立方英寸的體積，而僅具有大約 450 平方英寸的周長 - 也許是“創造性”的解決方案？ \xa0 \n Obviously, as more “Objects” are added, it will get more difficult to optimize the objects for volume and perimeter area. The designer’s ingenuity comes with “nesting” various geometrical objects in a given layout area.\xa0 \n 顯然，隨著添加更多“物體”，優化物體的體積和周邊區域將變得更加困難。 設計師的獨創性是在給定的佈局區域中“嵌套”各種幾何對象。\xa0 \n Various techniques can be used to optimize the layout’s compactness. Once all objects within the enclosure are determined, the designer can model those objects and start placing them in an orientation that: \n \n Utilizes the space in an efficient manner \n . Places objects that require nearness to each other, as closely as possible to each other. This may be due to mechanical, thermal, or electrical reasons to do this. For example, if a cable connects two Objects, it may be advantageous to have these two Objects as close as possible\xa0– how about eliminating the cable by connecting (directly) Object 1 into Object 2? \n Places objects that need as much distance from each other, as far away as possible from each other. Again, there may be mechanical, thermal, or electrical reasons to do this . \n \n 可以使用各種技術來優化佈局的緊湊性。 一旦確定了機櫃中的所有對象，設計人員就可以對這些對象建模並開始將它們放置在以下方向上： \n \xa0\xa0\xa0\xa0 1. 有效利用空間 \n \xa0\xa0\xa0\xa0 2. 將需要彼此靠近的物體放置在盡可能近的位置。 這可能是由於機械， \n \xa0 熱或電氣原因造成的。 \n 例如，如果電纜連接兩個對象，則使這兩個對象盡可能靠近可能是有利的–通過將對象 1 （直接）連接到對象 2 來消除電纜怎麼樣？ \n \xa0\xa0\xa0 \xa03. 放置需要彼此盡可能遠的對象，並使其盡可能遠。 同樣，可能出於機械，熱或電氣方面的原因。 \n It should be noted that Layout 3 and Layout 4 could be more complicated to produce (manufacture). The nonsymmetrical enclosure could be more difficult to fabricate than straight walls. This is not necessarily so if theenclosure is a tooled (molded or cast) product. However, if the enclosure is sheet metal, the extra walls\xa0provide a bit more of an issue to fabricate. \n 應該注意的是，佈局 3 和佈局 4 的生產（製造）可能更加複雜。 非對稱外殼可能比直壁更難製造。 如果外殼是加工（模製或鑄造）產品，則不一定如此。 但是，如果外殼是金屬板，則多餘的壁增加了更多的製造問題。 \n A note about designing in 3D: As all of the objects we design are actually 3Dobjects, we will actually need to design in 3D. A quick sketch in 2D may solve a portion of the design intent, but all of the details will need to be shown as the design moves to 3D.\xa0 \n 關於 3D 設計的注意事項：由於我們設計的所有物體實際上都是 3D 物體，因此實際上我們需要進行 3D 設計。 快速的 2D 草圖可以解決部分設計意圖，但是在設計移至 3D 時需要顯示所有細節。 \n This makes working in CAD essential to the accuracies and speed\xa0required in the contemporary design world. Creating 3D models of all of the objects makes checking clearances and fits simple to change and optimize. \n \xa0 這使得在 CAD 中工作對於精度和速度至關重要 \n 在當代設計界是必需的。 通過創建所有對象的 3D 模型，可以檢查間隙並使其易於更改和優化。 \xa0 \n An example of this is how a mechanical designer views a printed circuit board assembly (PCBA).\xa0 \n 機械設計師如何看待印刷電路板組件（ PCBA ）就是一個例子。 \n \xa0this is how a mechanical designer views a printed circuit board assembly (PCBA). It basically has a 2D layout of many components mounted on a printed circuit board. However, all of those components are at various heights, thus clearances above and below the PCBA will vary in many areas. Thus, the PCBA, while primarily thought of as a “2D area” (in the “sketch phase”), has a “thickness” to it that makes it a 3D volume. \n \xa0 這就是機械設計師如何看待印刷電路板組件（ PCBA ）的方式。 它基本上具有安裝在印刷電路板上的許多組件的 2D 佈局。 但是，所有這些組件都處於不同的高度，因此 PCBA 上方和下方的間隙在許多區域會有所不同。 因此， PCBA 雖然最初被認為是“  2D 區域”（處於“草圖階段”），但其如果具有“厚度”，使其成為 3D 體積。 \n \xa0 \n \n \xa0 \n Chapter Summary \n 章節總結 \n \xa0 This chapter takes us from the beginning point of a design where we have just an idea. It shows us how we transform that idea into the geometric placement of objects into space that gives us a physical manifestation of that idea. \n \xa0 本章將我們帶入一個只有想法的設計的起點。 它向我們展示瞭如何將這個想法轉變為物體在空間中的幾何放置，從而使我們對該想法進行物理表現。 \n We started by looking at our starting point and defining the boundaries of the design – what do we start with and what is the “outer edge” of the design. We have to define what the product is that the customer will need. \n 首先，我們著眼於起點並定義設計的邊界 - 我們從什麼開始，什麼是設計的“外緣”。 我們必須定義客戶所需的產品。我們看到了設計從修訂版 1 到修訂版 X 的過程，其中 X 是提供我們認為是客戶所需的設計。 \n Finally, we took a look at seeing how the individual objects that need to be in the design can be optimally placed to solve customer needs. There are trade-offs to be considered, and we must be aware of how we determine the best choices between these trade-offs. \n 最後，我們看了看如何最佳放置設計中需要解決的單個物體來滿足客戶需求。 需要權衡取捨，我們必須意識到我們如何決定這些權衡之間的最佳選擇。", 'tags': '', 'url': 'Week 6.html'}, {'title': '小組直播討論', 'text': 'week3 \n \n week4 \n', 'tags': '', 'url': '小組直播討論.html'}]};