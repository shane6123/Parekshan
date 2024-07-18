// Default hints config for latex
// FORMAT: (hint) ## (content) [## [title] ## [phone title]]
//  (...) is required, [...] is optional
var hintsconf = [
  // Greek
  'xa ## \\alpha',
  'xb ## \\beta',
  'xch ## \\chi',
  'xd ## \\delta',
  'xcd ## \\Delta',
  'xe ## \\epsilon',
  'xve ## \\varepsilon',
  'xet ## \\eta',
  'xg ## \\gamma',
  'xcg ## \\Gamma',
  'xio ## \\iota',
  'xl ## \\lambda',
  'xcl ## \\Lambda',
  'xm ## \\mu',
  'xn ## \\nu',
  'xo ## \\omega',
  'xco ## \\Omega',
  'xp ## \\pi',
  'xcp ## \\Pi',
  'xvp ## \\varpi',
  'xph ## \\phi',
  'xcph ## \\Phi',
  'xvph ## \\varphi',
  'xps ## \\psi',
  'xcps ## \\Psi',
  'xs ## \\sigma',
  'xcs ## \\Sigma',
  'xvs ## \\varsigma',
  'xz ## \\zeta',
  'xr ## \\rho',
  'xvr ## \\varrho',
  'xt ## x(t)',
  'xth ## \\theta',
  'xcth ## \\Theta',
  'xvth ## \\vartheta',
  'xu ## \\upsilon',
  'xcu ## \\Upsilon',
  'xx ## \\xi',
  'xcx ## \\Xi',
  'dxa ## \\(\\alpha\\)',
  'dxb ## \\(\\beta\\)',
  'dxch ## \\(\\chi\\)',
  'dxd ## \\(\\delta\\)',
  'dxcd ## \\(\\Delta\\)',
  'dxe ## \\(\\epsilon\\)',
  'dxve ## \\(\\varepsilon\\)',
  'dxet ## \\(\\eta\\)',
  'dxg ## \\(\\gamma\\)',
  'dxcg ## \\(\\Gamma\\)',
  'dxio ## \\(\\iota\\)',
  'dxl ## \\(\\lambda\\)',
  'dxcl ## \\(\\Lambda\\)',
  'dxm ## \\(\\mu\\)',
  'dxn ## \\(\\nu\\)',
  'dxo ## \\(\\omega\\)',
  'dxco ## \\(\\Omega\\)',
  'dxp ## \\(\\pi\\)',
  'dxcp ## \\(\\Pi\\)',
  'dxvp ## \\(\\varpi\\)',
  'dxph ## \\(\\phi\\)',
  'dxcph ## \\(\\Phi\\)',
  'dxvph ## \\(\\varphi\\)',
  'dxps ## \\(\\psi\\)',
  'dxcps ## \\(\\Psi\\)',
  'dxs ## \\(\\sigma\\)',
  'dxvs ## \\(\\varsigma\\)',
  'dxz ## \\(\\zeta\\)',
  'dxr ## \\(\\rho\\)',
  'dxvr ## \\(\\varrho\\)',
  'dxt ## \\(\\tau\\)',
  'dxth ## \\(\\theta\\)',
  'dxcth ## \\(\\Theta\\)',
  'dxvth ## \\(\\vartheta\\)',
  'dxu ## \\(\\upsilon\\)',
  'dxcu ## \\(\\Upsilon\\)',
  'dxx ## \\(\\xi\\)',
  'dxcx ## \\(\\Xi\\)',
  // begin env.
  'barr ## \\begin{array}{ccc}   &   &   \\\\   &   &   \\end{array} ## array',
  'bali ## \\begin{align}   &   \\\\   &   \\end{align} ## align',
  'balis ## \\begin{align*}   &   \\\\   &   \\end{align*} ## align*',
  'baliat ## \\begin{alignat}{ }   &   \\\\   &   \\end{alignat} ## alignat',
  'baliats ## \\begin{alignat*}{ }   &   \\\\   &   \\end{alignat*} ## alignat*',
  'balied ## \\begin{aligned}{ }   &   \\\\   &   \\end{aligned} ## aligned',
  'baliedat ## \\begin{alignedat}    &   \\\\   &   \\end{alignedat} ## alignedat',
  'bbmat ## \\begin{bmatrix}   &   \\\\   &   \\end{bmatrix} ## bmatrix',
  'bbmat2 ## \\begin{Bmatrix}   &   \\\\   &   \\end{Bmatrix} ## Bmatrix',
  'bcase ## \\begin{cases}   &   \\\\   &   \\end{cases} ## cases',
  'bequ ## \\begin{equation}   \\end{equation} ## equation',
  'bequs ## \\begin{equation*}   \\end{equation*} ## equation*',
  'beqn ## \\begin{eqnarray}   &   &   \\\\   &   &   \\end{eqnarray} ## eqnarray',
  'beqns ## \\begin{eqnarray*}   &   &   \\\\   &   &   \\end{eqnarray*} ## eqnarray*',
  'bgath ## \\begin{gather}     \\\\     \\\\    \\end{gather} ## gather',
  'bgaths ## \\begin{gather*}    \\\\    \\\\    \\end{gather*} ## gather*',
  'bgathed ## \\begin{gathered}    \\\\    \\\\    \\end{gathered} ## gathered',
  'bgathedo ## \\begin{gathered}[ ]    \\\\    \\\\    \\end{gathered} ## gathered',
  'bmat ## \\begin{matrix}   &   &   \\\\   &   &   \\end{matrix} ## matrix',
  'bmult ## \\begin{multline}    \\\\    \\\\    \\end{multline} ## multline',
  'bmults ## \\begin{multline*}    \\\\    \\\\    \\end{multline*} ## multline*',
  'bpmat ## \\begin{pmatrix}   &   &   \\\\   &   &   \\end{pmatrix} ## pmatrix',
  'bsplit ## \\begin{split}   &   \\\\   &   \\end{split} ## split',
  'bsubeq ## \\begin{subequations}    \\end{subequations} ## subequations',
  'bvmat ## \\begin{vmatrix}   &   &   \\\\   &   &   \\end{vmatrix} ## vmatrix',
  'bvmat2 ## \\begin{Vmatrix}   &   &   \\\\   &   &   \\end{Vmatrix} ## Vmatrix',
  // useful math
  'dd ## $ ## <i class="fa fa-dollar"></i>',
  'ddd ## $$ ## <i class="fa fa-dollar"></i><i class="fa fa-dollar"></i>',
  'frac ## \\frac{  }{  } ## frac',
  'sqrt ## \\sqrt{  } ## sqrt',
  'sqrto ## \\sqrt[  ]{  } ## sqrto',
  // math fonts
  'mbf ## \\mathbf{  } ## mathbf',
  'mrm ## \\mathrm{  } ## mathrm',
  'mcal ## \\mathcal{  } ## mathcal',
  'msf ## \\mathsf{  } ## mathsf',
  'mtt ## \\mathtt{  } ## mathtt',
  'mit ## \\mathit{  } ## mathit',
  // refs
  'tag ## \\tag{  } ## tag',
  'label ## \\label{  } ## label',
  'ref ## \\ref{  } ## ref',
  'eqref ## \\eqref{  } ## eqref',
  // useful chars
  'bslash ## \\ ## \\',
  'slash ## / ## /',
  'and ## & ## &',
  'sups ## ^ ## &#x2b1a;&#x2580;',
  'subs ## _ ## &#x2b1a;&#x2584;',
  'bra1 ## (  ) ## ( )',
  'bra2 ## [  ] ## [ ]',
  'bra3 ## {  } ## { }',
  'bra4 ## \\{  \\} ## \\{ \\}',
  'bra5 ## \\langle \\rangle ## < >',
  'pb1 ## (  ) ## ( )',
  'pb2 ## [  ] ## [ ]',
  'pb3 ## {  } ## { }',
  'pb4 ## \\{  \\} ## \\{ \\}',
  'pb5 ## \\langle  \\rangle ## &lt; &gt;',
  // relations
  'lt ## &lt;',
  'gt ## &gt;',
  'plus ## +',
  'minus ## -',
  'sub ## -',
  'pm ## \\pm',
  'mp ## \\mp',
  'star ## *',
  'vl ## |',
  'mul ## \\times ## ## &times;',
  'times ## \\times ## ## &times;',
  'div ## \\div ## ## &divide;',
  'cdot ## \\cdot ## ## &sdot;',
  'le ## \\le ## ## &le;',
  'leq ## \\leq ## ## &le;',
  'ge ## \\ge ## ## &ge;',
  'geq ## \\geq ## ## &ge;',
  'eq ## = ## ## =',
  'neq ## \\neq ## ## &ne;',
  'll ## \\ll ## ## &#x226a;',
  'gg ## \\gg ## ## &#x226b;',
  'equiv ## \\equiv ## ## &equiv;',
  'sim ## \\sim ## ## &#x7e;',
  'simeq ## \\simeq ## ## &#x2243;',
  'approx ## \\approx ## ## &asymp;',
  'approxeq ## \\approxeq ## ## &#x224a;',
  'cong ## \\cong ## ## &cong;',
  'propto ## \\propto ## ## &prop;',
  'doteq ## \\doteq ## ## &#x2a66;',
  'triangleq ## \\triangleq ## ## &#x225c;',
  'infty ## \\infty ## ## &infin;',
  'partial ## \\partial ## ## &part;',
  'sum ## \\sum_{  }^{  } ## ## &sum;',
  'prod ## \\prod_{  }^{  } ## ## &prod;',
  'dfrac ## \\dfrac{  }{  } ## dfrac',
  'eitheta ## e^{i\\theta} ## ## e i &theta;',
  'ejomegat ## e^{j\\omega t} ## ## e i &theta; t',
  'sin ## \\sin ## ## sin',
  'cos ## \\cos ## ## cos',
  // left right
  'left ## \\left ## left',
  'right ## \\right ## right',
  // derivative
  'dd2 ## {\\rm d} ## ## d&#x25a1;',
  'dd3 ## {\\,\\rm d} ## ## d&#x25a1;',
  'dx ## {\\rm d}x ## ## dx',
  'dy ## {\\rm d}y ## ## dy',
  'dz ## {\\rm d}z ## ## dz',
  'du ## {\\rm d}u ## ## du',
  'dt ## {\\rm d}t ## ## dt',
  'dv ## {\\rm d}v ## ## dv',
  'dw ## {\\rm d}w ## ## dw',
  'px ## \\partial x ## ## &part;x',
  'py ## \\partial y ## ## &part;y',
  'pz ## \\partial z ## ## &part;z',
  'pt ## \\partial t ## ## &part;t',
  'pu ## \\partial u ## ## &part;u',
  'pv ## \\partial v ## ## &part;v',
  'pw ## \\partial w ## ## &part;w',
  'dotx ## \\dot{x} ## ## dot x',
  'ddotx ## \\ddot{x} ## ## ddot x',
  'dddotx ## \\dddot{x} ## ## dddot x',
  'prime ## \' ## ## &#x2b1a;\'',
  // accent mark
  'hat ## \\hat{  }',
  'grave ## \\grave{  }',
  'bar ## \\bar{  }',
  'acute ## \\acute{  }',
  'check ## \\check{  }',
  'vec ## \\vec{  }',
  'breve ## \\breve{  }',
  'tilde ## \\tilde{  }',
  'widehat ## \\widehat{  }',
  'widetilde ## \\widetilde{  }',
  // functions
  'fx ## f(x) ## ## f(x)',
  'gx ## g(x) ## ## g(x)',
  'ft ## f(t) ## ## f(t)',
  'gt2 ## g(t) ## ## g(t)',
  'fz ## f(z) ## ## f(z)',
  'gz ## g(z) ## ## g(z)',
  'fxy ## f(x,y) ## ## f(x,y)',
  'gxy ## g(x,y) ## ## g(x,y)',
  'zxy ## z(x,y) ## ## z(x,y)',
  'ut ## u(t) ## ## u(t)',
  'vt ## v(t) ## ## v(t)',
  // derivative
  'dd4 ## {{\\rm d}  \\over {\\rm d}  } ## ## d&#x25a1;/d&#x25a1;',
  'dydx ## {{\\rm d} y \\over {\\rm d} x } ## ## dy/dx',
  'ddyx ## {{\\rm d} y \\over {\\rm d} x } ## ## dy/dx',
  'dydx2 ## {\\Delta y \\over \\Delta x } ## ## &Delta;y/&Delta;x',
  'ddyx2 ## {\\Delta y \\over \\Delta x } ## ## &Delta;y/&Delta;x',
  'dydx3 ## {\\delta y \\over \\delta x } ## ## &delta;y/&delta;x',
  'ddyx3 ## {\\delta y \\over \\delta x } ## ## &delta;y/&delta;x',
  // partial derivative
  'pp ## {\\partial  \\over \\partial  } ## ## &part;&#x25a1;/&part;&#x25a1;',
  'ppux2 ## {\\partial u \\over \\partial x } ## ## &part;u/&part;x',
  'pupx ## {\\partial u \\over \\partial x } ## ## &part;u/&part;x',
  'ppuy2 ## {\\partial u \\over \\partial y } ## ## &part;u/&part;y',
  'pupy ## {\\partial u \\over \\partial y } ## ## &part;u/&part;y',
  'ppuz2 ## {\\partial u \\over \\partial z } ## ## &part;u/&part;z',
  'pupz ## {\\partial u \\over \\partial z } ## ## &part;u/&part;z',
  'pput2 ## {\\partial u \\over \\partial t } ## ## &part;u/&part;t',
  'pupt ## {\\partial u \\over \\partial t } ## ## &part;u/&part;t',
  'ppzx2 ## {\\partial z \\over \\partial x } ## ## &part;z/&part;x',
  'pzpx ## {\\partial z \\over \\partial x } ## ## &part;z/&part;x',
  'ppzy2 ## {\\partial z \\over \\partial y } ## ## &part;z/&part;y',
  'pzpy ## {\\partial z \\over \\partial y } ## ## &part;z/&part;y',
  'ppzt2 ## {\\partial z \\over \\partial t } ## ## &part;z/&part;t',
  'pzpt ## {\\partial z \\over \\partial t } ## ## &part;z/&part;t',
  'ppux ## {\\partial^2 u \\over \\partial x^2 } ## ## &part;&sup2;u/&part;x&sup2;',
  'ppuy ## {\\partial^2 u \\over \\partial y^2 } ## ## &part;&sup2;u/&part;y&sup2;',
  'ppuz ## {\\partial^2 u \\over \\partial z^2 } ## ## &part;&sup2;u/&part;z&sup2;',
  'pput ## {\\partial^2 u \\over \\partial t^2 } ## ## &part;&sup2;u/&part;t&sup2;',
  'ppzx ## {\\partial^2 z \\over \\partial x^2 } ## ## &part;&sup2;z/&part;x&sup2;',
  'ppzy ## {\\partial^2 z \\over \\partial y^2 } ## ## &part;&sup2;z/&part;y&sup2;',
  'ppzt ## {\\partial^2 z \\over \\partial t^2 } ## ## &part;&sup2;z/&part;t&sup2;',
  'ppuxy ## {\\partial^2 u \\over \\partial x \\partial y} ## ## &part;&sup2;u/&part;x&part;y',
  'ppzxy ## {\\partial^2 z \\over \\partial x \\partial y} ## ## &part;&sup2;z/&part;x&part;y',
  // integration
  'int ## \\int_{ a }^{ b }    {\\,\\rm d} ## ## &int;&#x33b;&#x33b;&#x2e0b;',
  'int2 ## \\int_{ D }    {\\,\\rm d} ## ## &int;&#x33b;',
  'int3 ## \\int ## ## &int;',
  'oint ## \\oint_{ C }    {\\,\\rm d} ## ## &#x222e;&#x33b;',
  'oint2 ## \\oint ## ## &#x222e;',
  'iint ## \\iint_{ D }    {\\,\\rm d} ## ## &#x222c;&#x33b;',
  'iint2 ## \\iint    {\\,\\rm d} ## ## &#x222c;',
  'iiint ## \\iiint_{ V }     {\\,\\rm d} ## ## &#x222d;&#x33b;',
  'iiint2 ## \\iiint     {\\,\\rm d} ## ## &#x222d;',
  // sets
  'emptyset ## \\emptyset',
  'in ## \\in',
  'notin ## \\notin',
  'forall ## \\forall',
  'exists ## \\exists',
  'subset ## \\subset',
  'subseteq ## \\subseteq',
  'supset ## \\supset',
  'supseteq ## \\supseteq',
  'cup ## \\cup',
  'cap ## \\cap',
  'bigcup ## \\bigcup',
  'bigcap ## \\bigcap',
  'mid ## \\mid',
  'nabla ## \\nabla',
  'delta ## \\Delta',
  'land ## \\land',
  'lor ## \\lor',
  'lnot ## \\lnot',
  'lfloor ## \\lfloor',
  'rfloor ## \\rfloor',
  'lceil ## \\lceil',
  'rceil ## \\rceil',
  'lvert ## \\lvert ',
  'rvert ## \\rvert',
  'lvert2 ## \\lVert ',
  'rvert2 ## \\rVert',
  // bigs
  'big ## \\big ## big',
  'big2 ## \\Big ## Big',
  'bigg ## \\bigg  ## bigg',
  'bigg2 ## \\Bigg ## Bigg',
  // dots
  'dots ## \\dots',
  'ldots ## \\ldots',
  'cdots ## \\cdots',
  'vdots ## \\vdots',
  'ddots ## \\ddots',
  // arrows
  'to ## \\to',
  'gets ## \\gets',
  'rarr ## \\Rightarrow',
  'larr ## \\Leftarrow',
  'hookr ## \\hookrightarrow',
  'hookl ## \\hookleftarrow',
  'lrarr ## \\leftrightarrow',
  'lrarr2 ## \\Leftrightarrow',
  'uarr ## \\uparrow',
  'darr ## \\downarrow',
  'nearrow ## \\nearrow',
  'searrow ## \\searrow',
  'arr ## \\to',
  'arl ## \\gets',
  'arrr ## \\Rightarrow',
  'arll ## \\Leftarrow',
  'arhookr ## \\hookrightarrow',
  'arhookl ## \\hookleftarrow',
  'arlr1 ## \\leftrightarrow',
  'arllrr ## \\Leftrightarrow',
  'arlrlr ## \\Leftrightarrow',
  'arup ## \\uparrow',
  'ardown ## \\downarrow',
  'arnearrow ## \\nearrow',
  'arsearrow ## \\searrow',
  // functions
  'ffacos ## \\arccos',
  'ffasin ## \\arcsin',
  'ffatan ## \\arctan',
  'ffarg ## \\arg',
  'ffcos ## \\cos',
  'ffcosh ## \\cosh',
  'ffcot ## \\cot',
  'ffcoth ## \\coth',
  'ffcsc ## \\csc',
  'ffdeg ## \\deg',
  'ffdet ## \\det',
  'ffdim ## \\dim',
  'ffexp ## \\exp',
  'ffgcd ## \\gcd',
  'ffhom ## \\hom',
  'ffinf ## \\inf',
  'ffker ## \\ker',
  'fflg ## \\lg',
  'fflim ## \\lim',
  'ffliminf ## \\liminf',
  'fflimsup ## \\limsup',
  'ffln ## \\ln',
  'fflog ## \\log',
  'ffmax ## \\max',
  'ffmin ## \\min',
  'ffpr ## \\Pr',
  'ffsec ## \\sec',
  'ffsin ## \\sin',
  'ffsinh ## \\sinh',
  'ffsup ## \\sup',
  'fftan ## \\tan',
  'fftanh ## \\tanh',
  'ffdiag ## \\operatorname{diag}',
  'fftr ## \\operatorname{tr}',
  'arccos ## \\arccos',
  'arcsin ## \\arcsin',
  'arctan ## \\arctan',
  'arg ## \\arg',
  'cos ## \\cos',
  'cosh ## \\cosh',
  'cot ## \\cot',
  'coth ## \\coth',
  'csc ## \\csc',
  'deg ## \\deg',
  'det ## \\det',
  'dim ## \\dim',
  'exp ## \\exp',
  'gcd ## \\gcd',
  'hom ## \\hom',
  'inf ## \\inf',
  'ker ## \\ker',
  'lg ## \\lg',
  'lim ## \\lim',
  'liminf ## \\liminf',
  'limsup ## \\limsup',
  'ln ## \\ln',
  'log ## \\log',
  'max ## \\max',
  'min ## \\min',
  'pr ## \\Pr',
  'sec ## \\sec',
  'sin ## \\sin',
  'sinh ## \\sinh',
  'sup ## \\sup',
  'tan ## \\tan',
  'tanh ## \\tanh',
  'diag ## \\operatorname{diag}',
  'tr ## \\operatorname{tr}'
];